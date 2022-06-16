import { gql, useLazyQuery } from '@apollo/client'

const GET_SEARCH_RESULTS = gql`
query ListOfAnime ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        english
        native
      }
      coverImage {
        extraLarge
      }
    }
  }
}
`
// Начитался feature-sliced и решил сделать обертку
const useGetSearchResults = (search: string, page: number, perPage = 3) => useLazyQuery(
  GET_SEARCH_RESULTS,
  { variables: { search, page, perPage } },
)

export default useGetSearchResults
