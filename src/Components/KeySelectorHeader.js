import React from "react"
import {Dropdown, Grid, Input, Label, Segment} from "semantic-ui-react";



function KeySelectorHeader({ chartKey, setChartKey, chartPercentage, setChartPercentage }) {


    const dropdownChoices = [
        {
            key: "tCases",
            text: "Total Cases",
            value: "total_cases"
        },
        {
            key: 'tCasesMillion',
            text: 'Total Cases Per Million',
            value: 'total_cases_per_million'
        },
        {
            key: "tDeathsMillion",
            text: "Total Deaths Per Million",
            value: "total_deaths_per_million"
        },
        {
            key: "tDeaths",
            text: "Total Deaths",
            value: "total_deaths"
        }
    ]

    return (
        <Segment select style={{height: "7vh"}}>
            <Grid columns={4} rows={1} verticalAlign={"middle"}>
                <Grid.Column textAlign={"right"}>
                    <Label basic pointing='right'>
                        Select the data you would like to see
                    </Label>
                </Grid.Column>
                <Grid.Column textAlign={"left"}>
                    <Dropdown
                        placeholder={`Total Deaths Per Million`}
                        fluid
                        selection
                        options={dropdownChoices}
                        onChange={(event, data) => {
                            setChartKey(data.value)
                        }}
                    />
                </Grid.Column>
                <Grid.Column textAlign={"right"}>
                    <Label basic pointing='right'>
                        Showing the top {chartPercentage}% of {chartKey}
                    </Label>
                </Grid.Column>
                <Grid.Column textAlign={"left"}>
                    <Input
                        min={1}
                        max={80}
                        onChange={(event, { value }) => {
                            setChartPercentage(value)
                        }}
                        type='range'
                        value={chartPercentage}
                    />
                </Grid.Column>
            </Grid>
        </Segment>
    )

}

export default KeySelectorHeader
