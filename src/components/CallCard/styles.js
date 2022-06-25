import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    border-radius: 1rem;
    border: 1px solid ${p => p.missed ? p.theme.error : p.theme.active};
    margin-block: .5rem;
    background-color: ${p => p.theme.surface};
    color: ${p => p.theme.onSurface};

    display: flex;
    align-items: center;
    padding-inline: 1rem;
    position: relative;
    cursor: pointer;

    >i{
        font-size: 25px;
        margin-right: 1rem;
    }
`;

export const Caller = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    padding-left: .5rem;
    font-size: 1.3rem;
    >small{
        margin-top: .5rem;
        font-size: 0.7rem;
    }
`;

export const Time = styled.div`
    >*{
        padding-block: .25rem;
    }
`;

export const Direction = styled.i`
    position: absolute;
    left: 2rem;
    top: 1rem;
    transform: rotate(${p=>p.inbound?'45deg':'-135deg'});

    :before{
        font-size: 20px;
        color: ${p=>p.theme.error};
    }
`;

export const Blur = styled.div`
    ${p => p.active ? '' : 'visibility:hidden;'}
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 50;
    backdrop-filter: blur(5px);
    transition: visibility 0.3s ease;
`;

export const Details = styled.div`
    position: absolute;
    top: ${p => p.active ? '30%' : '100%'};
    width: 100%;
    height: 71%;
    background-color: ${p => p.theme.primary};
    transition: top 0.3s ease;

    display: flex;
    align-items: stretch;
    justify-content: space-evenly;
    padding-top: 2rem;

    >div{
        font-size: 1.2rem;
        line-height: 2rem;
        color: ${p=>p.theme.onPrimary};
    }
`;

export const Archive = styled.div`
    position: absolute;
    bottom: 3rem;
    width: 80%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    color: ${p=>p.theme.onSecondary};
    background-color: ${p=>p.theme.secondary};
`;