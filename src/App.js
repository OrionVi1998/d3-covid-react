import './App.css';
import TopHeader from "./Components/TopHeader";
import {useEffect, useState} from "react";
import {csv, group, autoType} from "d3"
import {Grid, Segment, Header} from "semantic-ui-react";
import PieChartWrapper from "./Components/PieChartWrapper";
import CountryDataTable from "./Components/CountryDataTable";
import KeySelectorHeader from "./Components/KeySelectorHeader";
import LineChartWrapper from "./Components/LineChartWrapper";

function App() {

    const [allData, setAllData] = useState([])
    const [latestData, setLatestData] = useState(null)
    const [countryData, setCountryData] = useState(null)
    const [chartKey, setChartKey] = useState("total_cases_per_million")
    const [chartPercentage, setChartPercentage] = useState(45)
    const [timedData, setTimedData] = useState(null)

    useEffect(() => {
        csv("https://covid.ourworldindata.org/data/owid-covid-data.csv", autoType)
            .then(data => {
                data = Array.from(group(data, d => d.iso_code), ([key, value]) => ({key, value}))

                let totalData = data.map(d => d.value)
                totalData = totalData.map(countryTimedData => {
                    return countryTimedData.sort((a, b) => a.date - b.date)
                })

                setAllData(totalData)

                data = totalData.map(d => d[d.length-1])

                data = data.filter(e =>
                    !e.iso_code.startsWith("OWID")
                )

                setLatestData(data)
            })
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        setChartPercentage(45)
    }, [chartKey])

    useEffect(() => {

        if (allData !== null && countryData !== null) {
            setTimedData(allData.find(utcTimeArray => utcTimeArray[0].iso_code === countryData.iso_code))
        }
        // console.log(timedData)

    }, [allData, countryData, timedData])




    function renderLineViz() {

        if (latestData) {
            if (!timedData) {
                return (
                    <Segment placeholder>
                        <Header.Subheader>
                            Select a country to see a date visualization of the selected field
                        </Header.Subheader>
                    </Segment>
                )
            } else {
                return (
                    <Segment>
                        <LineChartWrapper data={timedData} chartKey={chartKey}/>
                    </Segment>
                )
            }
        }
    }


    return (
        <div className="App">
            <Segment.Group>
                <TopHeader/>
                {
                    latestData ?
                        <Segment compact style={{height: "100%"}}>
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
                        <Segment loading style={{height: "92vh"}}/>
                }
                {renderLineViz()}
            </Segment.Group>
        </div>
    );
}

export default App;
