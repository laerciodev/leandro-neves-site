import { Link } from 'gatsby';
import styled from 'styled-components';

const SlideControl = styled(Link)`
    width: 12px;
    height: 12px;
    display: inline-flex;
    background-color: ${props => props.active === 'true' ? '#999FA4' : '#FFF'};
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border: 1px solid #999FA4;
    border-radius: 50%;
    margin: 0 3px;
    position: relative;
`;

export default SlideControl;