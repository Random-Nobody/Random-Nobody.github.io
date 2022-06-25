import styled from 'styled-components';

export const Base = styled.div`
    width: 3rem;
    position: relative;
`;

export const Circle = styled.div`
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-left: -1rem;
    bottom: .5rem;
    background-color: ${p => p.theme.surface};
    border: 1px solid ${p => p.theme.active};
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    >div{
        width: 4.25rem;
        height: 4.25rem;
        border-radius: 50%;
        background-color: ${p => p.theme.secondary};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
        align-items: stretch;

        >div{
            display: flex;
            justify-content: space-around;

            >span{
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background-color: ${p => p.theme.surface};
            }
        }
        &:hover{
            transform: scale(1.1,1.1);
        }
    }
`;

export const Blur = styled.div`
    ${p => p.active ? '' : 'visibility:hidden;'}
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 25;
    backdrop-filter: blur(5px);
    transition: visibility 0.3s ease;
`;

export const Pad = styled.div`
    position: absolute;
    top: ${p => p.active ? '30%' : '100%'};
    width: 100%;
    height: 71%;
    background-color: ${p => p.theme.primary};
    transition: top 0.3s ease;

    padding: 1rem .2rem .5rem .2rem;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    flex-wrap: wrap;

    >span{
        width: 32%;
        height: 24%;
        border-radius: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${p => p.theme.surface};
        color: ${p => p.theme.onSurface};
        font-size: 4rem;
        cursor: pointer;
        :hover{
            background-color: ${p => p.theme.active};
        }
    }

    >div{
        position: absolute;
        width: 100%;
        height: 30px;
        top: -20px;
        font-size: 25px;
        text-align: center;
        background-color: ${p => p.theme.primary2};
        color: ${p => p.theme.onPrimary};
        transform: scaleX(2);
        cursor: pointer;
    }
`;

export const Display = styled.div`
    position: absolute;
    width: 100%;
    height: 20%;
    top: ${p=>p.active?'3%':'-21%'};
    transition: top 0.3s ease;
    padding: 1rem;
    text-align: center;
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.onPrimary};
    font-size: 1.3rem;
    line-height: 3rem;
`;