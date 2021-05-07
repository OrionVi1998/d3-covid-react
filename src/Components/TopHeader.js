import React from 'react'
import {Header, Button, Icon, Menu} from "semantic-ui-react";

function TopHeader() {

    return (
        <Menu inverted style={{height:"6vh"}}>
            <Menu.Item position={"left"}>
                <Header as={"h1"} inverted>
                    Covid D3
                </Header>
            </Menu.Item>
            <Menu.Item>
                <Header.Subheader>
                    A lot of thanks to
                    <a href="https://ourworldindata.org/coronavirus-source-data"> Our World In Data
                    </a> for providing the dataset
                </Header.Subheader>
            </Menu.Item>
            <Menu.Item position="right">
                <Button
                    inverted
                    color={"grey"}
                    floated={"right"}
                    onClick={() => {window.open("https://github.com/OrionVi1998/d3-covid-react")}}>
                    <Icon name={"github"}/> GitHub
                </Button>
            </Menu.Item>
        </Menu>
    )
}

export default TopHeader
