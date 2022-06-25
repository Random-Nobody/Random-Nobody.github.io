import React, { useState } from 'react'
import { Wrapper, Wrapper1, Wrapper2, Wrapper3 } from './styles'

const Page0 = () => <Wrapper1>
    page0
</Wrapper1>;

const Page1 = () => <Wrapper2>
    page1
</Wrapper2>;

const Page2 = () => {
    return <Wrapper3>
        <i className='fa-solid fa-bug' />
        <span>This would be a contact page</span>
        <span>Maybe come back later?</span>
    </Wrapper3>;
}

export default function Content({ activePage }) {
    return (
        <Wrapper activePage={activePage}>
            <Page0 />
            <Page1 />
            <Page2 />
        </Wrapper>
    )
}
