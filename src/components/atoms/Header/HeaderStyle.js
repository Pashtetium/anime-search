import styled from 'styled-components'

import { ReactComponent as Logo } from 'common/assets/logo.svg'

export const HeaderStyle = styled.div`
  padding: 20px;
  background-color: #fff;
`

export const LogoStyle = styled(Logo)`
  max-width: 130px;

  @media only screen and (min-width: 768px) {
    max-width: 100%;
  }
`
