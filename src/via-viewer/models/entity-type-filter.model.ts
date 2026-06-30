import { EntityCategory } from "./vla-node.model"
import { LucideIconData } from "lucide-angular"


export interface FilterOption {
    type: EntityCategory,
    color: string,
    label: string,
    active: boolean,
    icon: LucideIconData,
}