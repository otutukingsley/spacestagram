import styled from 'styled-components'

export const CopyRight = styled.footer`
  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;



  .footer-wrapper{
    display: flex;
    flex-direction: row;
  }

  .footer-wrapper > * + * {
    margin: 0 0 0 1rem;
  }

  .footer-link{
    color: white;
    font-weight: bold;
  }

  .footer-text {
    font-size: inherit;
  }

  @media (max-width: 768px){
    .footer-wrapper{
      flex-direction: column;
    }
    .footer-wrapper > * + * {
      margin: 1rem 0 0 0;
    }
  }
`
