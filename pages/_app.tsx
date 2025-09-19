import '../styles/globals.css';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';
import { AppProps } from 'next/dist/shared/lib/router/router';

Router.events.on('routeChangeComplete', (url: string) => {
	if (typeof window !== 'undefined') {
		ym('hit', url);
	}
});

function MyApp({ Component, pageProps, router }: AppProps): React.ReactElement {
	return <>
		<Head>
			<title>CourseRank</title>
			<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property="og:locale" content="ru_RU" />
		</Head>
		<YMInitializer
			accounts={[]}
			options={{ webvisor: true, defer: true }}
			version="2"
		/>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
