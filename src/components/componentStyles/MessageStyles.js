import styled from 'styled-components';

export const Alert = styled.div`
width: 100%;
padding: 1rem;
margin: 1rem auto;
text-align: center;
background-color: ${({ theme }) => theme.colors.red};
color: ${({ theme }) => theme.colors.white};
font-size: inherit;
`