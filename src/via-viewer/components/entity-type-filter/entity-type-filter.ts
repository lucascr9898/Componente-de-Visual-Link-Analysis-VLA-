import { FilterOption } from "../../models/entity-type-filter.model"
import { Component } from "@angular/core"
import { Output } from "@angular/core"
import { EventEmitter } from "@angular/core"
import { EntityCategory } from "../../models/vla-node.model"
import { LucideAngularModule, User, Building2, Phone, Mail, MapPin, FileText, Car } from 'lucide-angular';


@Component({
  selector: 'app-entity-type-filter',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './entity-type-filter.html',
  styleUrl: './entity-type-filter.css'
})

export class EntityTypeFilter {
filters: FilterOption[] = [
  { type: 'person', label: 'Pessoa', color: '#3b82f6', active: true, icon: User },
  { type: 'company', label: 'Empresa', color: '#f59e0b', active: true, icon: Building2 },
  { type: 'phone', label: 'Telefone', color: '#10b981', active: true, icon: Phone },
  { type: 'email', label: 'E-mail', color: '#8b5cf6', active: true, icon: Mail },
  { type: 'address', label: 'Endereço', color: '#ec4899', active: true, icon: MapPin },
  { type: 'document', label: 'Documento', color: '#ef4444', active: true, icon: FileText },
  { type: 'vehicle', label: 'Veículo', color: '#06b6d4', active: true, icon: Car }
]

//Mudar estado pelo clique
  toggleFilter(filter: FilterOption) {
    filter.active = !filter.active
  const activeFilters = this.filters.filter(f => f.active === true);

  // Enviar o output formatado para o pai
  const activeTypes = activeFilters.map(f => f.type);
  this.filtersChanged.emit(activeTypes)
  }

  @Output() filtersChanged = new EventEmitter<EntityCategory[]>()
}