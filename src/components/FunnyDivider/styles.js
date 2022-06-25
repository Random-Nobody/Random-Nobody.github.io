import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 4rem;
    height: 100%;
    background-color: ${p => p.flip ? p.theme.background : p.theme.surface};
    
    :before{
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        left: -50%;
        transform-origin: top right;
        transform: skew(-30deg);
        background-color: ${p => p.flip ? p.theme.background : p.theme.surface};
        border-radius: 1rem 0;
        z-index: 1;
        border-right: 2px solid ${p => p.theme.active};
        border-bottom: 2px solid ${p => p.theme.active};
    }

    :after{
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        top: 0;
        right: -50%;
        background-color: ${p => p.flip ? p.theme.surface : p.theme.background};
        transform-origin: bottom left;
        transform: skew(-30deg);
        border-radius: 1rem 0;
        border-left: 2px solid ${p => p.theme.active};
    }

    overflow: hidden;

    margin-left: 40%;
`;

export const Bottom = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    background-color: ${p => p.flip ? p.theme.surface : p.theme.background};
`;