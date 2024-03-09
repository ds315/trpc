
import { createRoot } from 'react-dom/client';
import App from "./app.tsx";
import './main.css';

import { createTRPCReact } from '@trpc/react-query';
import type { tRouter } from '../../server/main.ts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

const root = document.getElementById('root') as HTMLElement;
const queryClient = new QueryClient();

export const t = createTRPCReact<tRouter>();

const trpcClient = t.createClient({
	links: [
		httpBatchLink({url: 'http://localhost:8000/trpc'})
	]
});

createRoot(root).render(<t.Provider client={trpcClient} queryClient={queryClient}>
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
</t.Provider>);
