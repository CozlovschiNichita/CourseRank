import React from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

export function Error404(): React.ReactElement {
	return (
		<>
			<Htag tag='h1'>Ошибка 404</Htag>
		</>
	);
}

export default withLayout(Error404);