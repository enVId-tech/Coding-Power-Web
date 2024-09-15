import React from 'react';
import type { AppProps } from 'next/app';

function GYSWeb({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default GYSWeb;