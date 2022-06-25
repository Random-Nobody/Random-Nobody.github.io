import React from 'react'
import { Wrapper, Bottom } from './styles'

export default function FunnyDivider({flip}) {
    return (
        <Wrapper flip={flip}>
            <Bottom />
        </Wrapper>
    )
}
