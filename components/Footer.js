import React from 'react'
import IconFacebook from '/components/icons/IconFacebook.js'
import IconGithub from '/components/icons/IconGithub.js'
import IconInstagram from '/components/icons/IconInstagram.js'
import IconTwitter from '/components/icons/IconTwitter.js'

export default function Footer() {
    return (
        <footer className='footer flex'>
            <a href='https://www.imdb.com/name/nm0000168/' target='_blank'>
                <IconTwitter />
            </a>
            <a href='https://www.imdb.com/name/nm0000168/' target='_blank'>
                <IconFacebook />
            </a>
            <a href='https://www.imdb.com/name/nm0000168/' target='_blank'>
                <IconInstagram />
            </a>
            <a href='https://www.imdb.com/name/nm0000168/' target='_blank'>
                <IconGithub />
            </a>
        </footer>
    )
}