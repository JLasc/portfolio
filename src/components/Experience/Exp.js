import React, { Component } from 'react'
import { Header, Menu, Container, Grid } from 'semantic-ui-react'

/* Module components */
import FinAid from './Jobs/finAid'
import Citi from './Jobs/citi'
import Snhu from './Jobs/snhu'
import Fid from './Jobs/fid'


const style = {
    margin: {
        backgroundColor: "lightblue",
        height: "800px",
        width: "100%",
        position: "relative"
    },
    textAlign: {
        margin: "0",
        position: "absolute",
        top: "50%",
        msTransform: "translateY(-50%)",
        transform: "translateY(-50%)",
        width: "50%"
    }

}

class Work extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.state = { activeItem: 'Financial Aid Services Inc.' }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    /* Dynmaically mount job detail components */
    getInfo = stateName => {
        const companyName = stateName
        switch (companyName) {
            case "Financial Aid Services Inc.":
                return <FinAid />
            case "Southern NH University":
                /* mount component with information on job */
                return <Snhu />
            case "Citizens Bank":
                /* mount component with information on job */
                return <Citi />
            case "Fidelity Investments":
                /* mount component with information on job */
                return <Fid />
        }
    }


    render() {
        const activeItem = this.state.activeItem
        return (
            <div>
                <Container text>
                    <section style={{ marginTop: '5rem' }}>
                        <Grid columns={2} relax='very'>
                            <Grid.Column>
                                {/* Start of the vertical menu */}
                                <Menu pointing secondary vertical>
                                    <Menu.Item style={{ fontSize: '1.33em' }} name='Financial Aid Services Inc.' active={activeItem === 'Financial Aid Services Inc.'} onClick={this.handleItemClick} />
                                    <Menu.Item style={{ fontSize: '1.33em' }} name='Southern NH University' active={activeItem === 'Southern NH University'} onClick={this.handleItemClick} />
                                    <Menu.Item style={{ fontSize: '1.33em' }} name='Citizens Bank' active={activeItem === 'Citizens Bank'} onClick={this.handleItemClick} />
                                    <Menu.Item style={{ fontSize: '1.33em' }} name='Fidelity Investments' active={activeItem === 'Fidelity Investments'} onClick={this.handleItemClick} />
                                </Menu>
                            </Grid.Column>
                            <Grid.Column>
                                {this.getInfo(activeItem)}
                            </Grid.Column>
                        </Grid>
                    </section>
                </Container>
            </div>
        )
    }
}

export default Work;