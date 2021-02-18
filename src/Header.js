import React from 'react';
import styled from 'styled-components';

export default function Header(){
    return(
        <StyledHeader className='header'>
            <h1>
            Photo of The Day From NASA!
            </h1>
        </StyledHeader>
    )
}

//style
const StyledHeader = styled.div`
    color: yellow;
    background-Color: #b03e19;
    margin: 0;
    padding-top: 2rem;
`;