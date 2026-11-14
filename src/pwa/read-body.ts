/**
 * Reads a response's body as a stream, and tells how many bytes have arrived as they arrive.
 *
 * A download the learner waits on shows a bar of its bytes, so its reader counts each chunk. The parts
 * of the shell and the sound set read their bodies this way.
 */

/** Reads the body of `response` whole, calling `onBytes` with the bytes read so far after each chunk. */
export async function readBody(response: Response, onBytes?: (bytes: number) => void): Promise<Uint8Array<ArrayBuffer>> {
  if (response.body === null) {
    const whole = new Uint8Array(await response.arrayBuffer());
    if (whole.length > 0) onBytes?.(whole.length);
    return whole;
  }
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let read = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    read += value.length;
    onBytes?.(read);
  }
  const bytes = new Uint8Array(read);
  let at = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, at);
    at += chunk.length;
  }
  return bytes;
}

/**
 * The size of the body of `response` from its `Content-Length` header, or `undefined` without one. A
 * server that compresses the body sends the compressed size, so a size the build wrote is preferred.
 */
export function declaredLength(response: Response): number | undefined {
  const length = Number(response.headers.get("content-length"));
  return Number.isFinite(length) && length > 0 ? length : undefined;
}
