import { Component, OnInit } from '@angular/core';
import { EndpointsService } from './endpoints.service';

@Component({
  selector: 'endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.css']
})
export class EndpointsComponent implements OnInit {

  title = 'List of endpoints';
  endpoints;

  constructor(service: EndpointsService) {
    this.endpoints = service.getEndpoints();
  }

  ngOnInit(): void {
  }

}
