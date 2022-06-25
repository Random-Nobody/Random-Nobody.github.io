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

    >i{
        font-size: 25px;
        margin-right: 1rem;
    }
`;

export const Caller = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
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