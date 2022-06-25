import React, { useState } from 'react'
import {
    Wrapper,
    Wrapper2,
    Wrapper3
} from './styles'


import Page1 from './Pages/Page1.jsx';

const Page2 = () => <Wrapper2>
    page1
</Wrapper2>;

const Page3 = () => {
    return <Wrapper3>
        <i className='fa-solid fa-bug' />
        <span>This should show contacts?</span>
        <span>Maybe come back later?</span>
    </Wrapper3>;
}

export default function Content({ data, activePage }) {
    return (
        <Wrapper activePage={activePage}>
            <Page1 data={data} />
            <Page2 data={data} />
            <Page3 />
        </Wrapper>
    )
}
