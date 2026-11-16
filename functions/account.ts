import { handleRequest } from "../server/index";
import type { Env } from "../server/types";
// Pages maps this Function to /account and /account/. Both are handled privately.
export const onRequest = (context: { request: Request; env: Env }) => handleRequest(context.request, context.env);
