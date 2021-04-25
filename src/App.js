import './App.css';
import TopHeader from "./Components/TopHeader";
import {useEffect, useState} from "react";
import {csv, group, max} from "d3"
import {Segment} from "semantic-ui-react";
import ChartWrapper from "./Components/ChartWrapper";

function App() {

    const [data, setData] = useState(null)
    const [country, setCountry] = useState(null)

    useEffect(() => {
        csv("https://covid.ourworldindata.org/data/owid-covid-data.csv")
            .then(data => {

                let maxDate = (d) => max(d, d => d.date)
                data = Array.from(group(data, d => d.iso_code), ([key, value]) => ({key, value}))
                data = data.map(d => d.value)
                    .map(d => d.filter(e => {
                        return e.date === maxDate(d) && e.total_cases_per_million !== null && e.total_cases_per_million !== undefined
                    }))
                    .map(d => d[0])
                console.log(data)

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
                            <ChartWrapper data={data} setCountry={setCountry}/>
                        </Segment>
                        :
                        <Segment vertical loading>
                            <div style={
                                {height: 500, width: 500}
                            }/>
                        </Segment>
                }
                {country}
            </Segment.Group>

        </div>
    );
}

export default App;