import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Titlebar = styled.div`
    height: 3.3rem;
    width: 100%;
    display: flex;
    position: relative;

    >svg{
        margin-left: 1rem;
        z-index: 10;
    }
`;

export const LogoWrapper = styled.div`
    height: 100%;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.surface};
    border-bottom: 2px solid ${p => p.theme.active};
`;

export const DividerWrapper = styled.div`
    height: 100%;
    position: absolute;
    right: 38%;
`;

export const MenuWrapper = styled.div`
    height: 100%;
    width: 67%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    font-size: 20px;


    padding-inline: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ActiveBar = styled.div`
    position: absolute;
    width: 36px;
    height: 6px;
    border-radius: 6px;
    background-color: ${p => p.theme.secondary};
    transition: left 0.3s ease;
    bottom: 0;
    z-index: 20;
    ${p => {
        switch (p.active) {
            case 0: return 'left: 194px;';
            case 1: return 'left: 264px;';
            case 2: return 'left: 331px';
            default: return 'left: 400px';
        }
    }}
`;

export const Content = styled.div`
    height: 91%;
    width: 100%;
    padding: 1rem;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const ArchiveAll = styled.div`
    width: 100%;
    height: 2rem;
    border-radius: 2rem;
    background-color: ${p=>p.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;