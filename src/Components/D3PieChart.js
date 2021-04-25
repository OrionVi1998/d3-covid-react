import * as d3 from "d3"

const MARGIN = {
    TOP: 50,
    BOTTOM: 50,
    RIGHT: 50,
    LEFT: 50
}

MARGIN.XDELTA = MARGIN.LEFT + MARGIN.RIGHT
MARGIN.YDELTA = MARGIN.TOP + MARGIN.BOTTOM

const WIDTH = 500
const HEIGHT = 500
const radius = Math.min(WIDTH, HEIGHT) / 2 - 50

class D3PieChart {

    constructor(element, data, setCountry) {
        // this.data = [
        //     {name: "Blue", value: 1},
        //     {name: "Ori", value: 2},
        //     {name: "HeHowShallNotBeNamed", value: 3},
        //     {name: "Blue", value: 4},
        //     {name: "Ori", value: 5},
        //     {name: "HeHowShallNotBeNamed", value: 6}
        // ]
        // data.map(d => console.log(d))

        // console.log("D3Pie", data)


        data = data.map(d => {
            return {
                name: d.iso_code,
                value: d.total_cases_per_million
            }
        })

        data = data.filter(d => {
            return (d.value > d3.max(data, d => d.value) * 0.75)
        })

        console.log("D3PieAfterFilter", data)

        let svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH)
            .attr("height", HEIGHT)
            .append("g")
            .attr("transform", `translate(${WIDTH / 2}, ${HEIGHT / 2})`)

        data = data.sort((a, b) => {
            console.log(a-b, a, b)
            return (a.value - b.value)
        })

        let color = d3.scaleOrdinal()
            .domain(data.map(d => d.value))
            .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

        let arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius)

        let pie = d3.pie()
            .sortValues(null)
            .value(d => d.value)

        let pies = svg.selectAll("arc").data(pie(data)).enter().append("g").attr("class", "arc")
        pies.append("path").attr("d", arc).attr("fill", d => {
            return color(d.value)
        }).on("mouseover", (event) => {
            setCountry(event.target.__data__.data.name)
        })

    }

    update() {

        //JOIN

        //EXIT

        //UPDATE

        //ENTER

    }
}

export default D3PieChart
