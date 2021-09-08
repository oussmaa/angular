import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from '../../shared/Style/style';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }
  lat = 51.678418;
  lng = 7.809007;

  private map!: google.maps.Map;
  ngOnInit(): void {

let loader =new Loader({
  apiKey:'AIzaSyCRaR44sMTA7nF3iab1neQKHFqo3b_IDBU'
})
 
 

 
}
}
