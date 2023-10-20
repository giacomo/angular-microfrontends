import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparturesComponent } from './pages/departures/departures.component';

const routes: Routes = [
  {
    path: 'departures',
    component: DeparturesComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
