import styled from 'styled-components';

export const Card = styled.div`
padding: 1rem;
border: #ccc 1px dotted;
margin: 1.3rem 0;
width: 30rem;
border-radius: 0.2rem;

@media(max-width: 700px){
 width: 100%;
}

.post-title{
 margin-top: 1.3rem;
 margin-bottom: 0.5rem;
}
.post-text{
 margin-top: 1.3rem;
 text-align: left;
 line-height: 24px;
}
`

export const CardImageCont = styled.div`
width: 100%;
height: 19rem;
display: block;
border-radius: 0.2rem;

img{
 width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 0.2rem;
}
`
