import styled from 'styled-components'
import { Card } from 'antd'

export const CardsContainerStyle = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-bottom: 20px;
  
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`

export const CardMetaStyle = styled(Card.Meta)`
  font-family: Montserrat, serif;
  font-size: 16px;
`
