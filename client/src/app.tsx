
import { t } from "./main.tsx";

// @deno-types="./types.d.ts"
import css from './app.module.css';

export default function App()
{
	const user = t.users.useQuery('1');

	return <>
		<div>id: {user.data?.id}</div>
		<div className={css.name}>Name: {user.data?.name}</div>
		<div className={css.age}>Age: {user.data?.age}</div>
	</>
}
