import React, { memo, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Frame, Content, toggle } from './styles'
import * as Icons from './icons'

const Tree = memo(({ children, name, style, open = false }) => {
    const [isOpen, setOpen] = useState(open)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
            <span style={{ verticalAlign: 'middle', ...style }}>{name}</span>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <animated.div style={{ transform }} {...bind}>
                    {children}
                </animated.div>
            </Content>
        </Frame>
    )
})

const style = {
    imageSize: {
        width: "350px"
    }
}

const Menu = () => (
    <Tree name="Featured" open>
        <Tree name="Weather2DoIt">
            <img alt='' style={style.imageSize} src="https://i.postimg.cc/0NPJY1yJ/66129081.png" />
            <br></br><em>Persistent To-do list using Firebase, Weather and Meetup API</em>
            <a rel="noopener noreferrer" href="https://jlasc.github.io/Weather2DoIt/" target='_blank'><Tree name="Preview" style={{ color: '#37ceff' }} /></a>
            <a rel="noopener noreferrer" href="https://github.com/JLasc/Weather2DoIt" target='_blank'><Tree name="Github" style={{ color: '#37ceff' }} /></a>
        </Tree>
        <Tree name="Liri Node Bot">
            <img alt='' src="https://i.postimg.cc/xCKTjtmy/bot.png" style={{ width: "150px" }} />
            <br></br><em>Backend server integrated with 3 different APIs. </em>
            <br></br><em>Spotify, Bands in Town, and OMDB</em>
            <a rel="noopener noreferrer" href="https://github.com/JLasc/Liri-Bot" target='_blank'><Tree name="Github" style={{ color: '#37ceff' }} /></a>
        </Tree>
        <Tree name="Game Of Thrones Trivia - Spoilers">
            <img alt='' src="https://jlasc.github.io/TriviaGame/assets/images/theme/nightking1.jpg" style={{ width: "250px" }} />
            <br></br><em>Game of Thrones themed trivia. </em>
            <br></br><em>One of my first projects using JavaScript, Particles, and Timers.</em>
            <a rel="noopener noreferrer" href="http://jlasc.github.io/TriviaGame" target='_blank'><Tree name="Preview" src="www.google.com" style={{ color: '#37ceff' }} /></a>
            <a rel="noopener noreferrer" href="https://github.com/JLasc/TriviaGame" target='_blank'><Tree name="Github" style={{ color: '#37ceff' }} /></a>
        </Tree>
        <Tree name="GifTastic">
            <img alt='' src="https://media1.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style={{ width: "250px" }} />
            <br></br><em>Search engine utilizing Giphy API - big updates coming soon</em>
            <a rel="noopener noreferrer" href="https://jlasc.github.io/GifTastic/" target='_blank'><Tree name="Preview" src="www.google.com" style={{ color: '#37ceff' }} /></a>
            <a rel="noopener noreferrer" href="https://github.com/JLasc/GifTastic" target='_blank'><Tree name="Github" style={{ color: '#37ceff' }} /></a>
        </Tree>
        <Tree name="Train Scheduler">
            <img alt='' src="https://i.postimg.cc/tC4dtJF3/train.jpg" style={style.imageSize} />
            <br></br><em>Calculates arrival times based on user local time.</em>
            <br></br><em>Persisent storage through firebase</em>
            <a rel="noopener noreferrer" href="https://jlasc.github.io/Train-Scheduler/" target='_blank'><Tree name="Preview" src="www.google.com" style={{ color: '#37ceff' }} /></a>
            <a rel="noopener noreferrer" href="https://github.com/JLasc/Train-Scheduler" target='_blank'><Tree name="Github" style={{ color: '#37ceff' }} /></a>
        </Tree>
        <Tree name="Crystal Collector">
            <img alt='' src="https://i.postimg.cc/kDPBHjBR/landscape.gif" style={style.imageSize} />
            <br></br><em>Basic math game using random numbers and crystals</em>
            <a rel="noopener noreferrer" href="https://jlasc.github.io/crystal-collector/" target='_blank'><Tree name="Preview" src="www.google.com" style={{ color: '#37ceff' }} /></a>
            <a rel="noopener noreferrer" href="https://github.com/JLasc/crystal-collector" target='_blank'><Tree name="Github" style={{ color: '#37ceff' }} /></a>
        </Tree>
        <Tree name="SQL Prodct Database - Terminal UI">
            <img alt='' src="https://i.postimg.cc/HkZy21QV/sqlstore.jpg" style={style.imageSize} />
            <br></br><em>Backend server connected to MySQL. Create, Read, Update, Delete. </em>
            <a rel="noopener noreferrer" href="https://github.com/JLasc/Bamazon"><Tree name="Github" style={{ color: '#37ceff' }} /></a>
        </Tree>
        <a rel="noopener noreferrer" href="http://www.github.com/Jlasc" target='_blank'><Tree name='More'>
            <span></span>
        </Tree></a>
    </Tree>
)

export default Menu