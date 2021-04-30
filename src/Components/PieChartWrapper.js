import React, {useRef, useState, useEffect} from 'react';
import D3PieChart from './D3PieChart'
import D3PieChartNewMethod from './D3PieChartNewMethod'

const PieChartWrapper = ({data, setCountryData}) => {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)


    useEffect(() => {

        let setSelectedCountry = (countryData) => {

            // console.log(countryData)

            countryData = data.find(country => {
                return country.iso_code === countryData.name
            })
            // console.log(countryData)
            setCountryData(countryData)
        }


        if (!chart) {
            // setChart(new D3PieChart(chartArea.current, data, setSelectedCountry))
            setChart(new D3PieChartNewMethod(chartArea.current, data, setSelectedCountry))
        } else {
            chart.update(data)
        }

    }, [chart, data, setCountryData])

    return (
        <div className="pie-chart-area" ref={chartArea}/>
    )
}

export default PieChartWrapper
