import React from 'react'
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import { SearchPage } from 'components/pages'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Page: {
          keyArgs: ['string'],
          // eslint-disable-next-line default-param-last
          merge(existing = [], incoming) {
            return [...existing, ...incoming]
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchPage />
    </ApolloProvider>
  )
}

export default App
