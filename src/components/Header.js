import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-coffee"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Jon Lascaze</h1>
                <p>Developer working out of the Greater Boston area.</p>
                <p>Specializing in building clean, minimalistic, and notable websites and applications.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('projects') }}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
