import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.background}; */
  background-color: red;
`

export const Icon = styled(Feather)`
  background-color: red;
  color: red;
  font-size: 24;
`

export const Header = styled.View`
  background-color: red;
`

export const Title = styled.Text``

export const Footer = styled.View``

export const Amount = styled.Text``

export const LastTransaction = styled.Text``
