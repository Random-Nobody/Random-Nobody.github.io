import React, { useState } from 'react'
import {
    Wrapper,
    Wrapper2,
    Wrapper3
} from './styles'


import Page1 from './Pages/Page1.jsx';
import Page2 from './Pages/Page2.jsx';

const Page3 = () => {
    return <Wrapper3>
        <i className='fa-solid fa-bug' />
        <span>This should show contacts?</span>
        <span>Maybe come back later?</span>
    </Wrapper3>;
}

export default function Content({ data, activePage, showDetails }) {
    return (
        <Wrapper activePage={activePage}>
            <Page1 data={data} showDetails={showDetails} />
            <Page2 data={data} showDetails={showDetails} />
            <Page3 />
        </Wrapper>
    )
}
