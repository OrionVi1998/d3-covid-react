import React, {useRef, useState, useEffect} from 'react';
import D3PieChart from './D3PieChart'

const PieChartWrapper = ({ data, setCountry }) => {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)


    useEffect(() => {

        if (!chart) {
            setChart(new D3PieChart(chartArea.current, data, setCountry))
        } else {
            chart.update()
        }

    }, [chart, data, setCountry])

    return (
        <div className="pie-chart-area" ref={chartArea}/>
    )
}

export default PieChartWrapper
