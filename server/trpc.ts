
import { initTRPC, AnyRouter } from 'https://esm.sh/@trpc/server@10.45.1';
import { fetchRequestHandler, FetchHandlerRequestOptions } from 'https://esm.sh/@trpc/server@10.45.1/adapters/fetch';

import type { MiddlewareHandler } from 'https://deno.land/x/hono@v4.0.10/mod.ts';

type tRPCOptions = Omit<FetchHandlerRequestOptions<AnyRouter>, 'req' | 'endpoint'> &
	Partial<Pick<FetchHandlerRequestOptions<AnyRouter>, 'endpoint'>>;

export const trpcServer = ({endpoint = '/trpc', ...rest}: tRPCOptions): MiddlewareHandler =>
	c => fetchRequestHandler({...rest, endpoint, req: c.req.raw});

const t = initTRPC.create();

export const publicProcedure = t.procedure;
export const router = t.router;
