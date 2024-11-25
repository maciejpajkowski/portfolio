import App from "next/app";
import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		Authorization: "Bearer " + process.env.NEXT_PUBLIC_VALIDATION_TOKEN,
	},
	cache: new InMemoryCache()
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
