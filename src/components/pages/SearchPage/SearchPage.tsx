import React, { useEffect, useState } from 'react'
import { Typography, Button, Space } from 'antd'

import { useGetSearchResults, useDebounce } from 'hooks'
import { Header } from 'components/atoms'
import { Cards } from 'components/organisms'

import { MainSpaceStyle, SearchStyle } from './SearchPageStyle'

const { Title } = Typography

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [perPage, setPerPage] = useState(3)

  const debouncedSearchQuery = useDebounce(searchQuery, 400)

  const [fetchQuery, {
    data, loading, error, fetchMore,
  }] = useGetSearchResults(debouncedSearchQuery, perPage)

  useEffect(() => {
    if (debouncedSearchQuery) {
      fetchQuery()
    }
  }, [debouncedSearchQuery, fetchQuery])

  const handleLoadMore = () => {
    setPerPage(perPage + 3)

    fetchMore({
      variables: {
        perPage,
      },
    })
  }

  return (
    <>
      <Header />
      <MainSpaceStyle align="center" direction="vertical">
        <Title level={2} style={{ color: '#00CC99' }}>Anime Search</Title>
        <SearchStyle onChange={(event: { target: HTMLInputElement }) => { setSearchQuery(event.target.value) }} />
        <Cards data={data} error={error} loading={loading} />
        <Space style={{ width: '100%', justifyContent: 'center' }}>
          <Button
            disabled={!data?.Page?.pageInfo.hasNextPage}
            type="default"
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </Space>
      </MainSpaceStyle>
    </>
  )
}

export default SearchPage
