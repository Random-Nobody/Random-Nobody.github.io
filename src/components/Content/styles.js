import styled from 'styled-components';

// 1% extra on both sides in case of weird rounding
export const Wrapper = styled.div`
    height: 100%;
    padding-bottom: 2.9rem;
    width: 306%;
    margin-left: ${p => p.activePage * -102 - 1 + '%'};
    transition: margin 0.3s ease;
    color: ${p=>p.theme.onSurface};

    display: flex;
    align-items: stretch;
    >div{
        flex-basis: 0;
        flex-grow: 1;
    }
`;

export const Wrapper2 = styled.div`
    
`;

export const Wrapper3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    text-align: center;
    >*{
        margin-block: 1rem;
    }

    >i{
        font-size: 100px;
    }
`;