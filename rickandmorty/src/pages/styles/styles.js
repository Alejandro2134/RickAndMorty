import styled, { css } from 'styled-components';

export const MenuItem = styled.div`
    cursor: pointer;

    ${props => props.active && css`
        color: red;
    `}
`