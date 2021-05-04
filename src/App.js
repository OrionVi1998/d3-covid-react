import './App.css';
import TopHeader from "./Components/TopHeader";
import {useEffect, useState} from "react";
import {csv, group, max, autoType} from "d3"
import {Grid, Segment} from "semantic-ui-react";
import PieChartWrapper from "./Components/PieChartWrapper";
import CountryDataTable from "./Components/CountryDataTable";
import KeySelectorHeader from "./Components/KeySelectorHeader";

function App() {

    const [allData, setAllData] = useState([])
    const [latestData, setLatestData] = useState(null)
    const [countryData, setCountryData] = useState(null)
    const [chartKey, setChartKey] = useState("total_cases_per_million")
    const [chartPercentage, setChartPercentage] = useState(45)

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

                data = data.filter(e =>
                    !e.iso_code.startsWith("OWID")
                )

                setLatestData(data)
            })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => setChartPercentage(45), [chartKey])



    return (
        <div className="App">

            <Segment.Group>
                <TopHeader/>
                {
                    latestData ?
                        <Segment compact style={{height: "82vh"}}>
                            <KeySelectorHeader chartKey={chartKey}
                                               setChartKey={setChartKey}
                                               chartPercentage={chartPercentage}
                                               setChartPercentage={setChartPercentage}/>
                            <Grid columns={2} divided>
                                <Grid.Column>
                                    <Segment>
                                        <PieChartWrapper
                                            data={latestData}
                                            setCountryData={setCountryData}
                                            chartKey={chartKey}
                                            chartPercentage={chartPercentage}
                                        />
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
