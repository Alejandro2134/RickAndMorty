import styled, { css } from 'styled-components';

export const MenuItem = styled.div`
    cursor: pointer;
    font-size: 40px;
    color: white;

    ${props => props.active && css`
        color: 	#4cb5c3;
    `}
`

export const Img = styled.img`
    height: 180px;
    width: 570px;
`