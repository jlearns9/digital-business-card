import React from 'react'
import IconEmail from '/components/icons/IconEmail.js'
import IconLinkedin from '/components/icons/IconLinkedin.js'

export default function Header() {
    return (
        <header className='header'>
            <img className='header__img' src='./images/profile-picture.jpg' />
            <h1 className='header__name'>Samuel L. Jackson</h1>
            <h2 className='header__title'>Frontend Developer</h2>
            <h3 className='header__handle'>@SamuelLJackson</h3>
            <div className='header__buttons flex'>
                <a href='https://www.imdb.com/name/nm0000168/' target='_blank'>
                    <button className='header__button-email button-styling'>
                        <IconEmail />
                        Email
                    </button>
                </a>
                <a href='https://www.imdb.com/name/nm0000168/' target='_blank'>
                    <button className='header__button-linkedin button-styling'>
                        <IconLinkedin />
                        LinkedIn
                    </button>
                </a>
            </div>
        </header>
    )
}