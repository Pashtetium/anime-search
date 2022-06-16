import React from 'react'
import { Card, Skeleton, Spin } from 'antd'

import { IResponse, IAnime } from 'interfaces/SearchResult'

import { CardsContainerStyle, CardMetaStyle } from './CardsStyle'

function Cards({ data, loading, error }: IResponse) {
  const cover = (anime: IAnime) => (
    <img alt="" src={anime.coverImage?.extraLarge} style={{ height: 180, objectFit: 'cover' }} />
  )

  if (loading) { return <Spin spinning /> }

  if (error) { return <pre>{error.message}</pre> }

  return (
    <CardsContainerStyle>
      {data?.Page?.media.map((anime: IAnime) => (
        <Skeleton key={anime.id} active loading={loading}>
          <Card bordered={false} cover={cover(anime)}>
            <CardMetaStyle description={anime.title.native} title={anime.title.english} />
          </Card>
        </Skeleton>
      ))}
    </CardsContainerStyle>
  )
}

export default Cards
