import './App.css';
import TopHeader from "./Components/TopHeader";
import {useEffect, useState} from "react";
import {csv, group, max, autoType} from "d3"
import {Grid, Segment} from "semantic-ui-react";
import PieChartWrapper from "./Components/PieChartWrapper";
import CountryDataTable from "./Components/CountryDataTable";

function App() {

    const [allData, setAllData] = useState([])
    const [latestData, setLatestData] = useState(null)
    const [countryData, setCountryData] = useState(null)

    useEffect(() => {
        csv("https://covid.ourworldindata.org/data/owid-covid-data.csv", autoType)
            .then(data => {
                let maxDate = (d) => max(d, d => d.date)
                data = Array.from(group(data, d => d.iso_code), ([key, value]) => ({key, value}))

                let totalData = data.map(d => d.value)
                setAllData(totalData)

                data = totalData
                    .map(d => d.filter(e => {
                        return e.date === maxDate(d) // && e.total_cases_per_million !== null && e.total_cases_per_million !== undefined
                    }))
                    .map(d => {
                        return d[0]
                    })

                setLatestData(data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="App">

            <Segment.Group>
                <TopHeader/>
                {
                    latestData ?
                        <Segment compact style={{height: "89vh"}}>
                            <Grid columns={2} divided>
                                <Grid.Column>
                                    <Segment>
                                        <PieChartWrapper data={latestData} setCountryData={setCountryData}/>
                                    </Segment>
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
