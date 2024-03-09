
import { Hono } from 'https://deno.land/x/hono@v4.0.10/mod.ts';
import { cors } from 'https://deno.land/x/hono@v4.0.10/middleware.ts';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

import { router, publicProcedure, trpcServer } from './trpc.ts';

const appRouter = router({
	users: publicProcedure.input(z.string().nullish()).query(({input}) => ({
		id: input,
		name: 'Test',
		age: 30
	}))
});

export type tRouter = typeof appRouter;

const app = new Hono();

app.use('/trpc/*', cors());
app.use('/trpc/*', trpcServer({router: appRouter}));

Deno.serve(app.fetch);
