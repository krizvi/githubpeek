import React from "react";
import ReactDOM from 'react-dom'
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";

import './styles.css';
import App from './components/App';
import {ApolloClient} from "apollo-client";

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const httpLink = new HttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
})

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
