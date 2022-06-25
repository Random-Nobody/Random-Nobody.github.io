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
        line-height: 1;
    }

    #app {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
`;

export const GetTheme = dark => {
    if (dark)
        return {
            primary: "#03dac5",
            primary2: "#20a79a",
            secondary: "#bb86fc",

            background: '#222',
            surface: "#444",
            active: '#777',
            error: "#b00020",

            onPrimary: '#fff',
            onError: '#fff',
            onSurface: '#eee',
            onBackground: '#eee'
        }

    return {
        primary: "#7d3add",
        primary2: "#6200ee",
        secondary: "#03dac5",

        background: '#eee',
        surface: "#fff",
        active: '#ddd',
        error: "#b00020",

        onPrimary: '#fff',
        onError: '#fff',
        onSurface: '#555',
        onBackground: '#333'
    };
}

export const Wrapper = styled.div`
    width: 376px;
    height: 666px;
    z-index: 100;

    background: ${p => p.theme.background};
    border-radius: 3px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .9);

    position: relative;

    overflow: hidden;
`;