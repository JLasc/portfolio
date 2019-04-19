import React from 'react';
import './style.css'

const style = {
    fontColor: {
        color: "#fadfad"
    }
}

const Nav = () => {
    return (
        <div class="ui secondary menu">
            <a style={style.fontColor} class="item">
                About
        </a>
            <a style={style.fontColor} class="item">
                Experience
        </a>
            <a style={style.fontColor} class="item">
                Work
        </a>
            <a style={style.fontColor} class="item">
                Contact
        </a>
            <div class="right menu">
                <a style={style.fontColor} class="ui item">
                    <i class="file icon"></i>
                    Resume
          </a>
            </div>
        </div>
    )
}

export default Nav;
