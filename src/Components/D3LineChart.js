import * as d3 from "d3";

const MARGIN = {
    TOP: 10,
    BOTTOM: 20,
    RIGHT: 10,
    LEFT: 50
}

MARGIN.XDELTA = MARGIN.LEFT + MARGIN.RIGHT
MARGIN.YDELTA = MARGIN.TOP + MARGIN.BOTTOM

const WIDTH = 1280
const HEIGHT = 225

class D3LineChart {

    constructor(element, data) {

        this.svg = d3.select(element)
            .append("svg")
            .attr("width", WIDTH)
            .attr("height", HEIGHT)




        this.x = d3.scaleUtc()
            .domain(d3.extent(data, d => d.date))
            .range([MARGIN.LEFT, WIDTH - MARGIN.RIGHT])


        this.y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([HEIGHT - MARGIN.BOTTOM, MARGIN.TOP])


        this.line = d3.line()
            .defined(d => !isNaN(d.value) && d.value !== null)
            .x(d => this.x(d.date))
            .y(d => this.y(d.value))

        this.mainG = this.svg.append("g")
        this.xax = this.svg.append("g")
        this.yax = this.svg.append("g")

        this.update(data)

    }

    update(data) {

        this.x
            .domain(d3.extent(data, d => d.date))

        this.y
            .domain([0, d3.max(data, d => d.value)]).nice()

        this.yAxis = g => g
            .attr("transform", `translate(${MARGIN.LEFT},0)`)
            .call(d3.axisLeft(this.y))
            .call(g => g.select(".domain").remove())
            .call(g => g.select(".tick:last-of-type text").clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .text(data.y))

        this.xAxis = g => g
            .attr("transform", `translate(0,${HEIGHT - MARGIN.BOTTOM})`)
            .call(d3.axisBottom(this.x).ticks(WIDTH / 80).tickSizeOuter(0))

        this.xax
            .call(this.xAxis);

        this.yax
            .call(this.yAxis);


        this.mainG
            .selectAll("path")
            .data([data])
            .join(enter => {
                    return enter.append("path")
                        .attr("d", d => this.line(d))
                },
                update => {
                    return update
                        .attr("d", d => this.line(d))
                },
                exit => {
                    return exit.remove()
                }
            )
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")


    }

}

export default D3LineChart
