import React, { Component } from 'react'
import { Image, Container, Header, Segment, Grid, Divider, Label, Icon, Button, Reveal } from 'semantic-ui-react'
import Additional from '../Work/Additional'
import projectInfo from './feeder'

const style = {
    custom: {
        height: "800px",
        width: "100%",
        backgroundColor: 'lightcyan',
        position: "relative"
    },
    align: {
        margin: "0",
        position: "absolute",
        top: "50%",
        msTransform: "translateY(-50%)",
        transform: "translateY(-50%)",
    },
    marginLeft: {
        marginLeft: "2rem"
    }


}

class Work extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this)
    }

    toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden })
        if (!this.state.isHidden) {
            style.custom = {
                height: "1000px"
            }
        } else {
            style.custom = {
                height: "800px"
            }
        }
    }





    render() {
        return (
            <div style={style.custom}>
                <Container text>
                    <Header as='h2'>Things I've Made:</Header>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <Image src="https://via.placeholder.com/240"
                                label={{ color: 'black', content: 'Featured', icon: 'caret right', ribbon: true }}
                                fluid />
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
                            <Image src="https://via.placeholder.com/240"
                                label={{ color: 'black', content: 'Featured', icon: 'caret right', ribbon: true }}
                                fluid />
                        </Grid.Column>
                    </Grid>
                    <Grid columns={5} relax='very'>
                        <Grid.Column />
                        <Grid.Column />
                        <Grid.Column>
                            <Button style={style.buttonMargin} onClick={this.toggleHidden}>Show More</Button>
                            <Grid.Column>
                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column />
                    </Grid>
                </Container >
                <div>
                </div>
                {!this.state.isHidden && <Additional data={projectInfo} />}
            </div>
        )
    }
}


export default Work