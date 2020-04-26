import styled from 'styled-components';

const ContainerSlides = styled.div`
    transform: translateX(${props => props.index ? props.index * -100 : '0'}vw);
    transform-origin: center center;
    transition: transform 0.5s;
    display: flex;
    width: 400vw;
    overflow-x: auto;
    margin: 0;
`;

export default ContainerSlides;