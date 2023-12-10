import React from 'react'
import About from '/components/main/About.js'
import Interests from '/components/main/Interests.js'

export default function Main() {
    return (
        <main className='main'>
            <About />
            <Interests />
        </main>
    )
}