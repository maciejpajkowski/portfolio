import App from 'next/app';
import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'node-fetch';

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_VALIDATION_TOKEN
	},
	fetch: fetch
});

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ApolloProvider client={client}>
                <GlobalStyle />
				<Component {...pageProps} />
			</ApolloProvider>
		);
	}
}