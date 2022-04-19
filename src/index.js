import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
  uri:'http://localhost:9000/graphql',
  cache:new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

