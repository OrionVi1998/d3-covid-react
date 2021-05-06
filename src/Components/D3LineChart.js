import * as d3 from "d3";

const MARGIN = {
    TOP: 0,
    BOTTOM: 100,
    RIGHT: 0,
    LEFT: 100
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


    }

    update(data) {

    }

}

export default D3LineChart
