import React, {useEffect, useState} from "react";
import {Grid, Header, Pagination, Table} from "semantic-ui-react";

function CountryDataTable({countryData}) {

    const [currentPage, setPage] = useState(1)
    const [totalRows, setTotalRows] = useState([])
    const [resultsToDisplay, setResultsToDisplay] = useState(3)

    useEffect(() => {

        switch (countryData) {
            default:
                setPage(1)
                setTotalRows(
                    Object.keys(countryData).map(k => {
                        if (countryData[k] !== null) {
                            return (
                                <Table.Row>
                                    <Table.Cell>{k.replace(new RegExp("_", "gm"), " ")}</Table.Cell>
                                    <Table.Cell>{countryData[k].toString()}</Table.Cell>
                                </Table.Row>)
                        }
                    }).filter((row) => row !== undefined)
                )
                setResultsToDisplay(Math.round(totalRows.length / 3))
                break;

            case null:
                break;
        }

    }, [countryData, totalRows.length])


    return (
        countryData ?
            (<Grid.Column>
                <Header
                    content={`Country: ${countryData.location}`}
                    subheader={"Hover over a section of the pie chart to see more data"}/>
                <Table definition size={"small"}>
                    <Table.Body>
                        {
                            totalRows.slice(
                                resultsToDisplay * (currentPage - 1), resultsToDisplay * currentPage
                            ).map((row) => row)
                        }
                    </Table.Body>
                </Table>
                <Pagination onPageChange={(event) => {
                    console.log(event)
                    setPage(Number(event.target.outerText))
                }} activePage={currentPage} totalPages={3}/>
            </Grid.Column>)
            :
            (<Grid.Column>
                <Header
                    content={`Country Data`}
                    subheader={"Hover over a section of the pie chart to see more data"}/>
            </Grid.Column>)
    )

}

export default CountryDataTable
