import { handleRequest } from "../../server/index";
import type { Env } from "../../server/types";
export const onRequest = (context: { request: Request; env: Env }) => handleRequest(context.request, context.env);
