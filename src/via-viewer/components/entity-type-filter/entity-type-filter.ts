
import { filter } from "rxjs";
import { FilterOption } from "../../models/entity-type-filter.model"
import { Component } from "@angular/core"

@Component({
  selector: 'app-entity-type-filter',
  standalone: true,
  templateUrl: './entity-type-filter.html',
  styleUrl: './entity-type-filter.css'
})

export class EntityTypeFilter {
filters: FilterOption[] = [
  { type: 'person', label: 'Pessoa', color: '#3b82f6', active: true },
  { type: 'company', label: 'Empresa', color: '#d9e477', active: true },
  { type: 'phone', label: 'Telefone', color: '#2a8f2a', active: true },
  { type: 'email', label: 'E-mail', color: '#5c1344', active: true },
  { type: 'address', label: 'Endereço', color: '#7c880f', active: true },
  { type: 'document', label: 'Documento', color: '#a01010', active: true },
  { type: 'vehicle', label: 'Veículo', color: '#a98', active: true }
]

  toggleFilter(filter: FilterOption) {
    filter.active = !filter.active
  const activeFilters = this.filters.filter(f => f.active = true);
  }
}