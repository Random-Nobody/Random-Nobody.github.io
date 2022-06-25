import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #233142;
        font-family: helvetica, arial, sans-serif;
        font-size: 13px;
        color: #333333;
        line-height: 1;
    }   

`;

export const Wrapper = styled.div`
    width: 376px;
    height: 666px;
    z-index: 100;

    background: ${p=>p.theme.background};
    border-radius: 3px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .9);

    position: relative;
`;

export const GetTheme = key => {
    switch (key) {
        case 'dark':
        case 'light':
        default:
            return {
                primary1: "#6200ee",
                primary2: "#3700b3",
                secondary: "#03dac5",

                background: '#eee',
                surface: "#fff",
                error: "#b00020",

                onPrimary: '#fff',
                onError: '#fff',
                onSurface: '#555',
                onBackground: '#000'
            }
    }
}