import * as d3 from "d3";

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


class D3PieChart {

    constructor(element, data, setCountryData, chartPercentage) {

        this.setCountryData = setCountryData

        this.svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH)
            .attr("height", HEIGHT)
            .append("g")
            .attr("transform", `translate(${WIDTH / 2}, ${HEIGHT / 2})`)

        this.pie = d3.pie()
            .sortValues(null)
            .value(d => d.value)

        this.arc = d3.arc()
            .innerRadius(0)
            .outerRadius(Math.min(WIDTH, HEIGHT) / 2 - 1)

        this.update(data, chartPercentage)

    }

    update(data, chartPercentage) {
        let topTwo = [data[data.length -2], data[data.length - 1]]

        data = data.filter(d => {
            return (d.value > d3.max(data, d => d.value) * chartPercentage /100)
        })

        if (data.length === 1) {
            data = topTwo
        }

        this.arcs = this.pie(data)

        this.color = d3.scaleOrdinal()
            .domain(data.map(d => d.value))
            .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

        this.svg.append("g")
            .attr("stroke", "white")
            .selectAll("path")
            .data(this.arcs)
            .join(
                enter => {
                    enter.append("path")
                        .attr("fill", d => this.color(d.value))
                        .on("click", (event, data) => {
                            this.setCountryData(data.data)
                        })
                        .attr("d", this.arc)
                        .append("title")
                        .text(d => {
                            return `${d.data.name}: ${Math.round(d.data.value).toLocaleString()}`
                        })
                },
                update => update,
                exit => exit.remove())


        let arcLabel = (d) => {
            const radius = Math.min(WIDTH, HEIGHT) / 2 * 0.8;
            return d3.arc().innerRadius(radius).outerRadius(radius).centroid(d);
        }

        this.svg.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 12)
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(this.arcs)
            .join(enter => {
                    enter.append("text")
                        .attr("transform", d => `translate(${arcLabel(d)})`)
                        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.10).append("tspan")
                            .attr("y", "-0.4em")
                            .attr("font-weight", "bold")
                            .text(d => d.data.name))
                        .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
                            .attr("x", 0)
                            .attr("y", "0.7em")
                            .attr("fill-opacity", 0.7)
                            .text(d => d.data.value.toLocaleString()))
                        .on("click", (event, data) => {
                            this.setCountryData(data.data)
                        })
                },
                update => update,
                exit => exit.remove()
            )

    }
}

export default D3PieChart
