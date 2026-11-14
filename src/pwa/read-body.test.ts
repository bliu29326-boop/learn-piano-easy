import { expect, test } from "../testing";
import { declaredLength, readBody } from "./read-body";

/** A response whose body arrives in the chunks `parts`, one read each. */
function chunked(parts: string[]): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const part of parts) controller.enqueue(encoder.encode(part));
      controller.close();
    },
  });
  return new Response(stream);
}

test("reading_a_body_counts_the_bytes_after_each_chunk_and_keeps_them_in_order", async () => {
  const counts: number[] = [];
  const bytes = await readBody(chunked(["abc", "de", "fghi"]), (read) => counts.push(read));
  expect(counts).toEqual([3, 5, 9]);
  expect(new TextDecoder().decode(bytes)).toBe("abcdefghi");
});

test("reading_an_empty_body_reports_no_bytes", async () => {
  const counts: number[] = [];
  const bytes = await readBody(new Response(null), (read) => counts.push(read));
  expect(bytes.length).toBe(0);
  expect(counts).toEqual([]);
});

test("the_declared_length_is_the_content_length_header_or_undefined", () => {
  expect(declaredLength(new Response("x", { headers: { "content-length": "1200" } }))).toBe(1200);
  expect(declaredLength(new Response(null))).toBeUndefined();
});
