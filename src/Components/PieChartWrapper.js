import React, {useRef, useState, useEffect} from 'react';
import D3PieChart from './D3PieChart'

const PieChartWrapper = ({data, setCountryData, chartKey, chartPercentage}) => {
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

        console.log(data)

        let formattedData = data.map(d => {
            return {
                name: d.iso_code,
                value: d[chartKey]
            }
        })

        formattedData = formattedData.sort((a, b) => {
            return (a.value - b.value)
        })


        if (!chart) {
            setChart(new D3PieChart(chartArea.current, formattedData, setSelectedCountry, chartPercentage))
        } else {
            chart.update(formattedData, chartPercentage)
        }

    }, [chart, data, setCountryData, chartKey, chartPercentage])

    return (
        <div className="pie-chart-area" ref={chartArea}/>
    )
}

export default PieChartWrapper
