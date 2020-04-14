import { Component, OnInit } from '@angular/core';
import { FormFieldService } from './form-field.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  endpoints = ["Physical systems", "Persons", "Projects", "Mission", "Action", "Location", "Features of interest", "Observable properties", "Units of measurement", "Observations"];
  methods = ["GET", "PUT", "POST", "DELETE"];

  selected_endpoint;
  selected_method;
  introduced_data;

  show = "none;";
  message1;
  message2;
  message3;
  message4;

  user_input;


  takeInfo(evt: MouseEvent) {
    this.show = "circle;";
    this.message1 = "Data sent correctly!";
    this.message2 = "Type: " + this.selected_endpoint;
    this.message3 = "Method: " + this.selected_method;
    this.message4 = "Additional data: " + this.introduced_data;

    this.user_input = [this.selected_endpoint, this.selected_method, this.introduced_data];
  }



  constructor(service: FormFieldService) {


  }


  ngOnInit(): void {
  }



}
