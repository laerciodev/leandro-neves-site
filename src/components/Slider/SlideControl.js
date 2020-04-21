import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SlideControl = styled(Link)`
    width: 10px;
    height: 10px;
    display: inline-flex;
    background-color: ${props => props.active === 'true' ? 'red' : 'black'};
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 3px;
    position: relative;
`;

export default SlideControl;