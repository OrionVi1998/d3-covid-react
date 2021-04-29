import './App.css';
import TopHeader from "./Components/TopHeader";
import {useEffect, useState} from "react";
import {csv, group, max, autoType} from "d3"
import {Grid, Header, Segment, Pagination, Table} from "semantic-ui-react";
import PieChartWrapper from "./Components/PieChartWrapper";
import CountryDataTable from "./Components/CountryDataTable";

function App() {

    const [data, setData] = useState(null)
    const [countryData, setCountryData] = useState(null)

    useEffect(() => {
        csv("https://covid.ourworldindata.org/data/owid-covid-data.csv", autoType)
            .then(data => {
                let maxDate = (d) => max(d, d => d.date)
                data = Array.from(group(data, d => d.iso_code), ([key, value]) => ({key, value}))

                data = data.map(d => d.value)
                    .map(d => d.filter(e => {
                        return e.date === maxDate(d) // && e.total_cases_per_million !== null && e.total_cases_per_million !== undefined
                    }))
                    .map(d => {
                        return d[0]
                    })
                setData(data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="App">

            <Segment.Group>
                <TopHeader/>
                {
                    data ?
                        <Segment compact>
                            <Grid columns={2} divided>
                                <Grid.Column>
                                    <PieChartWrapper data={data} setCountryData={setCountryData}/>
                                </Grid.Column>
                                <CountryDataTable countryData={countryData}/>
                            </Grid>
                        </Segment>
                        :
                        <Segment loading>
                            <div style={
                                {height: 500, width: 500}
                            }/>
                        </Segment>
                }
            </Segment.Group>
        </div>
    );
}

export default App;
