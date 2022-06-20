import React from 'react'
import './App.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import { SearchPage } from 'components/pages'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache({}),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchPage />
    </ApolloProvider>
  )
}

export default App
