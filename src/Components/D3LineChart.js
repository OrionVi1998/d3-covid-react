import * as d3 from "d3";

const MARGIN = {
    TOP: 0,
    BOTTOM: 20,
    RIGHT: 0,
    LEFT: 50
}

MARGIN.XDELTA = MARGIN.LEFT + MARGIN.RIGHT
MARGIN.YDELTA = MARGIN.TOP + MARGIN.BOTTOM

const WIDTH = 1000
const HEIGHT = 225

class D3LineChart {

    constructor(element, data) {

        this.svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH)
            .attr("height", HEIGHT)

        let x = d3.scaleUtc()
            .domain(d3.extent(data, d => d.date))
            .range([MARGIN.LEFT, WIDTH - MARGIN.RIGHT])


        let y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([HEIGHT - MARGIN.BOTTOM, MARGIN.TOP])

        let line = d3.line()
            .x(d => x(d.date))
            .y(d => y(d.value))

        this.svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);

        let yAxis = g => g
            .attr("transform", `translate(${MARGIN.LEFT},0)`)
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove())
            .call(g => g.select(".tick:last-of-type text").clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .text(data.y))

        let xAxis = g => g
            .attr("transform", `translate(0,${HEIGHT - MARGIN.BOTTOM})`)
            .call(d3.axisBottom(x).ticks(WIDTH / 80).tickSizeOuter(0))

        this.svg.append("g")
            .call(xAxis);

        this.svg.append("g")
            .call(yAxis);



    }

    update(data) {

    }

}

export default D3LineChart
