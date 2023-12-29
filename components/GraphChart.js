import EchartsReact from "echarts-for-react";

export function GraphChart({ data }) {
	const chartOptions = {
		tooltip: {},
		legend: [
			{
				data: data.categories.map(function (a) {
					return a.name;
				}),
			},
		],
		series: [
			{
				name: "Les Miserables",
				type: "graph",
				layout: "none",
				data: data.nodes,
				links: data.links,
				categories: data.categories,
				roam: true,
				label: {
					show: true,
					position: "right",
					formatter: "{b}",
				},
				labelLayout: {
					hideOverlap: true,
				},
				scaleLimit: {
					min: 0.4,
					max: 2,
				},
				lineStyle: {
					color: "source",
					curveness: 0.3,
				},
			},
		],
	};

	return <EchartsReact option={chartOptions} />;
}
