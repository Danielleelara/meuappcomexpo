import React, { FC } from 'react'
import { Text } from 'react-native'
import {
  Container,
  Icon,
  Header,
  Footer,
  Amount,
  LastTransaction,
  Title
} from './styles'

interface Props {
  title?: string
  icon: string
}

const HighlightCard: FC<Props> = ({ title, icon }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
        <Text></Text>
      </Footer>
    </Container>
  )
}

export default HighlightCard
