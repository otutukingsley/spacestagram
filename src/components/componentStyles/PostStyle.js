import styled from 'styled-components';

export const Card = styled.div`
padding: 1rem;
border: #ccc 1px dotted;
margin: 1.3rem 0;
width: 30rem;

.post-title{
 margin-top: 1.3rem;
}
.post-text{
 margin-top: 1.3rem;
 text-align: left;
 line-height: 25px;
}
`

export const CardImageCont = styled.div`
width: 100%;
height: 19rem;
display: block;

img{
 width: 100%;
 height: 100%;
 object-fit: cover;
}
`
