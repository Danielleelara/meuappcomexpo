import React, { FC } from 'react'

import {
  Container,
  Header,
  Icon,
  UserGreeting,
  Photo,
  UserInfo,
  User,
  UserName,
  UserWrapper
} from './styles'

import HighlightCard from '../../components/HighlightCard'

const DashBoard: FC = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/78480991?v=4'
              }}
            />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Danielle de Souza</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      
      <HighlightCard title="teste" icon="power" />
    </Container>
  )
}

export default DashBoard
