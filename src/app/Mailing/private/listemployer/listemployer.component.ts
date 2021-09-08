import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listemployer',
  templateUrl: './listemployer.component.html',
  styleUrls: ['./listemployer.component.css']
})
export class ListemployerComponent implements OnInit {

  constructor() { }

  profileForm!: FormGroup;
  ngOnInit(): void {
  }

}
