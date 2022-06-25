import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 3rem;
    position: absolute;
    bottom: 0;
    z-index: 10;

    background-color: ${p => p.theme.surface};
    color: ${p => p.theme.onSurface};

    display: flex;
    align-items: stretch;
`;

export const Icon = styled.div`
    position: relative;
    font-size: 25px;
    flex-basis: 0;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${p => p.active ? `background-color: ${p.theme.background};` : ''}

    &:hover{ background-color: ${p => p.theme.active}; }
`;

export const Alert = styled.div`
    position: absolute;
    top: 20%;
    right: 25%;
    font-size: 15px;
    padding-inline: 5px;
    border-radius: 10px;
    color: ${p => p.theme.onError};
    background-color: ${p => p.theme.error};
`;

export const ActiveBar = styled.div`
    position: absolute;
    width: 36px;
    height: 6px;
    border-radius: 5px 5px 0 0;
    background-color: ${p => p.theme.secondary};
    transition: left 0.3s ease;
    bottom: 0;
    ${p=>{
        switch(p.active){
            case 0: return 'left: 23px;';
            case 1: return 'left: 105px;';
            case 2: return 'left: 235px';
            default: return 'left: -50px';
        }
    }}
`;