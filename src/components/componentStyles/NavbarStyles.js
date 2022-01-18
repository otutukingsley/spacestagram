import styled from 'styled-components'

export const Nav = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.white};

  .nav-bar {
    width: 100%;
    display: block;
  }

  .nav-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-link {
    color: white;
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    font-weight: bold;
  }

  .nav-heading {
    font-weight: bold;
    font-size: clamp(1rem, 2.5vw, 2rem);
    margin-bottom: 0.5rem;
  }

  .nav-text {
    font-weight: lighter;
    font-size: clamp(0.8rem, 2.5vw, 1rem);
  }

  @media (max-width: 519px) {
    .nav-wrapper {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .nav-wrapper > * + * {
        margin: 1rem 0 0 0 ;
    }
  }
`
