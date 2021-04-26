import React from "react";
import {Table} from "semantic-ui-react";

function CountryDataTable({countryData}) {

    return (
        <Table definition size={"small"}>
            <Table.Body>
                {
                    Object.keys(countryData).map(k => {
                        if (countryData[k] !== null) {

                            return (
                                <Table.Row>
                                    <Table.Cell>{k.replace(new RegExp("_", "gm"), " ")}</Table.Cell>
                                    <Table.Cell>{countryData[k].toString()}</Table.Cell>
                                </Table.Row>)
                        }
                    })
                }
            </Table.Body>
        </Table>
    )

}

export default CountryDataTable
