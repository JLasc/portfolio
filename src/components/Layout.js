import PropTypes from 'prop-types'
import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./chevron.css"
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Label,
} from 'semantic-ui-react'
import Exp from './Experience/Exp'

const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}




const HomepageHeading = ({ mobile }) => (
    <Container text
        style={{ marginTop: mobile ? "0em" : "10em" }}
    >

        <Image
            src='https://i.postimg.cc/L4wq5ptV/Type.gif'
            size='medium'
            circular
            style={{
                margin: "0px auto"
            }}
        />

        <Header
            as='h1'
            content='Jon Lascaze'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                fontFamily: 'IM Fell English SC'
            }}
        />

        <Header
            as='h2'
            content="Freelance developer working out of the Greater Boston area. Specializing in building clean, notable websites and applications."
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '.5em' : '1.5em',
                textAlign: "justify"
            }}
        />
        <div className="arrow bounce">
            <a className="fas fa-chevron-down fa-2x" onClick={function () {
                scroller.scrollTo("About", {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                    offset: -75
                })
            }}></a>
        </div>
    </Container >
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
    state = {
        activeItem: ''
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        scroller.scrollTo(name, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -75
        })
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{
                            minHeight: 1100,
                            padding: '1em 0em',
                        }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>

                                <Menu.Item
                                    name='About'
                                    as='a'
                                    onClick={this.handleItemClick}
                                    active={this.state.activeItem === 'About'}>
                                    About
                                </Menu.Item>

                                <Menu.Item
                                    name='Experience'
                                    as='a'
                                    onClick={this.handleItemClick}
                                    active={this.state.activeItem === 'Experience'}>
                                    Experience
                                    </Menu.Item>

                                <Menu.Item
                                    name='Projects'
                                    as='a'
                                    onClick={this.handleItemClick}
                                    active={this.state.activeItem === 'Projects'}>
                                    Projects
                                </Menu.Item>

                                <Menu.Item
                                    name='Contact'
                                    as='a'
                                    onClick={this.handleItemClick}
                                    active={this.state.activeItem === 'Contact'}>
                                    Contact
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {

    state = {
        actItem: ''
    }

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    handleItemClick = (e, { name }) => {
        this.setState({ actItem: name })
        scroller.scrollTo(name, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -75
        })
        this.handleSidebarHide()
    }


    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item name='About' as='a' onClick={this.handleItemClick}>About</Menu.Item>
                    <Menu.Item name='Experience' as='a' onClick={this.handleItemClick}>Experience</Menu.Item>
                    <Menu.Item name='Projects' as='a' onClick={this.handleItemClick}>Projects</Menu.Item>
                    <Menu.Item name='Contact' as='a' onClick={this.handleItemClick}>Contact</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em', height: "1100px" }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Element name='About'></Element>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            About
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            I'm an aspiring software engineer located in New Hampshire. I enjoy building web applications, responsive websites, terminal programs, and more. I am currently working on building my skill with Python and C#
            </p>
                        <p style={{ fontSize: '1.33em' }}>
                            I hold a Bachelors in Finance from Southern New Hampshire University. Within the last two years, I looked to make a  switch to the IT field, and completed a <a href="https://bootcamp.unh.edu/" target="_blank">Full Stack Coding Bootcamp</a> offered through University of New Hampshire, focused on the MERN stack, in addition to my own self-learning. Shortly after completing the bootcamp, I began an internship as a Front End Develop with <a href="http://www.financialaidservices.com/" target="_blank">Financial Aid Services Inc.</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image
                            bordered
                            rounded
                            size='large'
                            style={{
                                height: "250px",
                                width: "250px",
                                filter: "grayscale(100%)"
                            }}
                            src='https://i.postimg.cc/nz8RnzFQ/me.jpg'
                            bordered
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{ fontSize: '1.12em' }}>
                        <p>Below are a few things I'm experienced with:</p>
                        <p><i class='small angle double right icon'></i>React</p>
                        <p><i class='small angle double right icon'></i>Express</p>
                        <p><i class='small angle double right icon'></i>Node</p>
                        <p><i class='small angle double right icon'></i>Mongo/SQL</p>
                        <p><i class='small angle double right icon'></i>Docker</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em', height: "900px" }} vertical>
            <Element name='Experience'></Element>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Experience
                        </Header>
                        <Exp />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>


        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally'>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Icon name='react' size='huge' />
                        <Icon name='html5' size='huge' />
                        <Icon name='npm' size='huge' />
                        <Icon name='node js' size='huge' />
                        <Icon name='github alternate' size='huge' />
                        <Icon name='docker' size='huge' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Element name='Projects'></Element>

                        <Image src="https://i.postimg.cc/0NPJY1yJ/66129081.png"
                            as='a'
                            label={{ color: 'black', content: 'Featured', icon: 'caret right', ribbon: true }}
                            fluid
                            bordered
                            href='https://github.com/JLasc/Weather2DoIt'
                            target="_blank"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted color='grey'>
                            <Header as='h4'>Weather2DoIt</Header>
                            <Divider horizontal>
                                <Icon name='tag' />
                            </Divider>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex quis augue porttitor faucibus. Quisque dui nunc, tincidunt quis ullamcorper non, luctus in risus. Suspendisse ut lacus et sapien suscipit accumsan. Maecenas fermentum elit mi, et vulputate tortor cursus sit amet.
                                </p>
                        </Segment>
                        <Label.Group >
                            <Label color="black" key="black"> HTML </Label>
                            <Label color="black" key="black"> CSS </Label>
                            <Label color="black" key="black"> Javascript </Label>
                            <Label color="black" key="black"> Firebase </Label>
                            <Label color="black" key="black"> API </Label>
                        </Label.Group>
                    </Grid.Column>
                </Grid>


                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Projects</a>
                </Divider>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Segment inverted color='grey'>
                            <Header as='h4'>Liri Node Bot</Header>
                            <Divider horizontal>
                                <Icon name='tag' />
                            </Divider>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ex quis augue porttitor faucibus. Quisque dui nunc, tincidunt quis ullamcorper non, luctus in risus. Suspendisse ut lacus et sapien suscipit accumsan. Maecenas fermentum elit mi, et vulputate tortor cursus sit amet.
                                </p>
                        </Segment>

                        <Label.Group >
                            <Label color="black" key="black"> HTML </Label>
                            <Label color="black" key="black"> CSS </Label>
                            <Label color="black" key="black"> Javascript </Label>
                            <Label color="black" key="black"> Firebase </Label>
                            <Label color="black" key="black"> API </Label>
                        </Label.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src="https://i.postimg.cc/xCKTjtmy/bot.png"
                            as='a'
                            style={{ width: "250px", height: "250px" }}
                            label={{ color: 'black', content: 'Featured', icon: 'caret right', ribbon: true }}
                            href='https://github.com/JLasc/Liri-Bot'
                            target="_blank"
                            fluid />
                    </Grid.Column>
                </Grid>
                <Grid.Row>
                    <Grid columns={1}>
                        <Grid.Column>
                            <Button as='a' size='large'>
                                More
                    </Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <List link inverted>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <List link inverted>
                                <List.Item as='a' href='https://github.com/JLasc' target='_blank'>Github</List.Item>
                                <List.Item as='a' href='https://www.linkedin.com/in/jonathanlascaze' target='_blank'>LinkedIn</List.Item>
                                <List.Item as='a' href='mailto:lascaze.j@gmail.com'>Contact</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Jonathan Lascaze
              </Header>
                            <p>
                                Created with React & Semantic UI
              </p>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer >
)
export default HomepageLayout