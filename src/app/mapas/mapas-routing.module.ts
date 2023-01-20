import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreeenComponent } from './pages/full-screeen/full-screeen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'fullscreen', component: FullScreeenComponent },
      { path: 'zoom-range', component: ZoomRangeComponent },
      { path: 'marcadores', component: MarcadoresComponent },
      { path: 'propiedades', component: PropiedadesComponent },
      { path: '**', redirectTo: 'fullscreen' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
