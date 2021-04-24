import './App.css';
import TopHeader from "./Components/TopHeader";
import {useEffect, useState} from "react";
import {csv, group, max} from "d3"
import {Segment} from "semantic-ui-react";
import ChartWrapper from "./Components/ChartWrapper";

function App() {

    const [data, setData] = useState(null)

    useEffect(() => {
        csv("https://covid.ourworldindata.org/data/owid-covid-data.csv")
            .then(data => {

                let maxDate = (d) => max(d, d => d.date)
                data = Array.from(group(data, d => d.iso_code), ([key, value]) => ({key, value}))
                data = data.map(d => d.value).map(d => d.filter(e => e.date===maxDate(d))).map(d => d[0])

                setData(data)
            })

            .catch(err => console.log(err))

    }, [])

    return (
        <div className="App">
            <TopHeader/>

            <Segment>
                <ChartWrapper data={data}/>
            </Segment>
        </div>
    );
}

export default App;
