import styled from 'styled-components'

export const CopyRight = styled.footer`
  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.white};

  .footer-text {
    text-align: center;
    font-size: inherit;
  }
`
