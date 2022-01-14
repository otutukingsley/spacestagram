import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

body{
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
}

.wrapper{
  max-width: 75.25rem;
  margin: 0 auto;
  padding: 1rem 2.2rem;
}

.like-btn{
  padding: 0.5rem 1rem;
  font-size: inherit;
  margin : 1rem 0 0 0;
  cursor: pointer;
  border-radius: 0.2rem;
}

.like{
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.grey};
}

.unliked{
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.black}
}

`
