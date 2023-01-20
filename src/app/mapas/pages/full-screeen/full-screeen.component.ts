import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-full-screeen',
  templateUrl: './full-screeen.component.html',
  styles: [`
    #mapa {
      height: 100%;
      width: 100%;
    }
  
  `]
})
export class FullScreeenComponent implements OnInit {
  
  ngOnInit(): void {

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -84.22621474475535, 10.00827032274609 ],
      zoom: 18
    });

  }

}
