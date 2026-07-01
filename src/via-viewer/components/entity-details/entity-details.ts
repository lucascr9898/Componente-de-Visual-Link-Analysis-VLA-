import { Component, Input } from "@angular/core";
import { VlaEdge } from "../../models/vla-edge.model";
import { VlaNode } from "../../models/vla-node.model";

@Component ({
    selector: 'app-entity-details',
    standalone: true,
    templateUrl: './entity-details.html',
    styleUrl: './entity-details.css',
})

export class EntityDetails {
    @Input() selectedEntity: VlaNode | null = null;
    @Input() entityEdge: VlaEdge[] = [];

    get edgeCount(): number {
        return this.entityEdge.length;
    }

    get metadataList(): { key: string; value: string | number | boolean }[]{
        if (!this.selectedEntity){
            return[]
        }

        if (!this.selectedEntity.metadata) {
            return[];
        }

        return Object.entries(this.selectedEntity.metadata).map(([key, value]) => {
            return {key, value};
        });
        }
    }

