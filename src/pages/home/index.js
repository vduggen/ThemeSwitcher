import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../styles/themes/context';
import GlobalStyle from '../../styles/GlobalStyle';

const Page = styled.div`
    width:100%;
    height:100vh;
    background:${props => props.theme.theme.background};
    margin:0;
    padding:0;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    a {
        margin: 20px 0;
        color:${props => props.theme.theme.color};
        text-decoration:none;
    }

    h1 {
        font-size:30px;
        color:${props => props.theme.theme.color};
        font-family:sans-serif;
    }
`;

export default function Home() {
    const {ToggleTheme, typeTheme} = useContext(ThemeContext);
    
    return(
        <>
            <GlobalStyle />

            <Page>
                <h1>Home</h1>
                <Link to="/about">Ir para about</Link>
                <button onClick={ToggleTheme}>Mudar para o tema {typeTheme}</button>
            </Page>
        </>
    )
}