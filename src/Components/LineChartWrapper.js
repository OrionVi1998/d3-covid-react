import React, {useRef, useState, useEffect} from 'react';
import D3LineChart from "./D3LineChart";


const LineChartWrapper = ({ data, chartKey }) => {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)


    useEffect(() => {

        console.log(data[0].date.toUTCString())

        let formattedData = data.map(d => {
            return {
                name: d.iso_code,
                date: d.date,
                value: d[chartKey]
            }
        })

        if (!chart) {
            setChart(new D3LineChart(chartArea.current, formattedData))
        } else {
            chart.update(formattedData)
        }

    }, [chart, chartKey, data])

    return (
        <div className="line-chart-area" ref={chartArea}/>
    )
}

export default LineChartWrapper
