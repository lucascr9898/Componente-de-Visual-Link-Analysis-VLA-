import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit} from "@angular/core";
import { VlaNode } from "../../models/vla-node.model";
import { VlaEdge } from "../../models/vla-edge.model";
import { Network, DataSet } from "vis-network/standalone";

@Component ({
    selector: 'app-graph-view',
    standalone: true,
    templateUrl: './graph-view.html',
    styleUrl : './graph-view.css',
})

export class GraphView implements AfterViewInit {
    @Input() nodes: VlaNode[]=[];
    @Input() edges: VlaEdge[]=[];
    @Input() selectedNodeId: string | null = null;
    @Output() nodeClicked = new EventEmitter<string>();

    @ViewChild('graphContainer') graphContainer!: ElementRef;

   ngAfterViewInit(): void {
       const nodesDataSet = new DataSet(this.mapNodesNetwork());
       const edgesDataSet = new DataSet(this.mapEdgesNetwork());
       const data = { nodes: nodesDataSet, edges: edgesDataSet};
       const network = new Network(this.graphContainer.nativeElement, data, {});
   }

    mapEdgesNetwork() {
    return this.edges.map(edge => {
        return {
            id: edge.id,
            from: edge.source,
            to: edge.target,
            label: edge.label,
        };
    });
}

mapNodesNetwork() {
    return this.nodes.map(node => {
        return {
            id: node.id,
            label: node.label,
        };
    });
} }