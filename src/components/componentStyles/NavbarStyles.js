import styled from 'styled-components';

export const Nav = styled.nav`
position: sticky;
top: 0;
left: 0;
right: 0;
z-index: 10;
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
background-color: ${({ theme }) => theme.colors.skyBlue};
color: ${({ theme }) => theme.colors.white};


.nav-wrapper{
 max-width: 75.25rem;
 margin: 0 auto;
 padding: 1rem 2.2rem;

 
 .nav-heading{
  font-weight: bold;
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 0.5rem;
 }

 .nav-text{
  font-weight: lighter;
  font-size: clamp(.8rem, 2.5vw, 1rem);
 }

}
`