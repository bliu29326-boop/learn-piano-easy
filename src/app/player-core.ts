/**
 * The player's core: the 3D scene, the transport that plays a song into it, and the learner's keys.
 *
 * The play page's shell of `src/app/shell.ts` builds on it, and so does the embed of `src/app/embed.ts`.
 * Nothing else creates a scene or a transport.
 *
 * - **The learner's notes** come from the input bus. Each note on sounds on the engine's input sampler
 *   and holds its key in the scene, and each note off lets both go. The pedal reaches the sampler.
 * - **The on-screen piano** of `src/input/pointer-piano.ts` plays the key under the pointer on the bus,
 *   while `clickablePiano` is on.
 * - **A stopped core stays silent.** `run(false)` stops the frames and pauses the song, and the bus's
 *   notes then neither sound nor hold a key. A note off still passes, so no key or note hangs.
 * - **The core owns no song and no frame of the transport.** Its host loads the song and calls the
 *   transport's `tick`, as the shell's control bar and the embed each do.
 * - **Each host's song has its own clock,** as `SongOutput` says, while both share the engine's samplers.
 */
import { attachPointerPiano } from "../input/pointer-piano";
import type { InputBus } from "../input/input-bus";
import type { SongClock } from "../play/clock";
import { Transport, type TransportAudio } from "../play/transport";
import { createScene, type PianoScene } from "../render/scene";
import type { SettingsStore } from "../settings/store";
import type { AudioService } from "../site/services";

/**
 * The clock a transport plays its song by, and what sounds the song. The play page uses the site's
 * own, with its metronome and background track. The embed has its own, so neither moves the other's
 * song, place, speed or loop.
 */
export interface SongOutput {
  clock: SongClock;
  audio: TransportAudio;
}

/** The scene and the transport in a box, with the learner's keys wired to both. */
export interface PlayerCore {
  readonly scene: PianoScene;
  readonly transport: Transport;
  /** Whether the core runs, which `run` sets. */
  readonly running: boolean;
  /** Starts or stops the frames and the learner's sound. Stopping pauses the song. */
  run(on: boolean): void;
  /** Stops everything, lets the learner's held keys go, and frees the scene's GPU resources. */
  dispose(): void;
}

/**
 * Builds the core into `box`, driven by `settings`, on the site's `input` bus and `audio` service. Its
 * song plays through `song`, which is the site's own clock and engine when absent.
 */
export function createPlayerCore(
  box: HTMLElement,
  settings: SettingsStore,
  input: InputBus,
  audio: AudioService,
  song: SongOutput = { clock: audio.clock, audio: audio.engine },
): PlayerCore {
  const engine = audio.engine;
  const scene = createScene(box, settings);
  const transport = new Transport(song.clock, song.audio, scene);
  let running = true;

  const stopInput = input.subscribe((event) => {
    if (!running && event.type !== "noteOff") return;
    if (event.type === "noteOn") {
      void engine.resume();
      void engine.input.noteOn(event.pitch, event.velocity);
      scene.holdKey(event.pitch, true);
    } else if (event.type === "noteOff") {
      engine.input.noteOff(event.pitch);
      scene.holdKey(event.pitch, false);
    } else engine.input.pedal(event.down);
  });
  const stopPointer = attachPointerPiano(scene, {
    press: (pitch, velocity) => input.noteOn(pitch, velocity, "pointer"),
    release: (pitch) => input.noteOff(pitch, "pointer"),
    enabled: () => settings.get("clickablePiano"),
  });

  return {
    scene,
    transport,
    get running() {
      return running;
    },
    run(on) {
      if (on === running) return;
      running = on;
      scene.run(on);
      if (!on) transport.pause();
    },
    dispose() {
      running = false;
      transport.pause();
      stopPointer();
      stopInput();
      scene.dispose();
    },
  };
}
