import { GraphChart, NodeAlignChart } from "@/components";
import { graphData } from "@/data/graph";
import { nodeAlignData } from "@/data/nodeAlign";

export default function Home() {
	return (
		<div>
			<GraphChart data={graphData} />
			<NodeAlignChart data={nodeAlignData} />
		</div>
	);
}
