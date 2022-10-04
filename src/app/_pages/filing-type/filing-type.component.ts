import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss']
})
export class FilingTypeComponent implements OnInit {

  constructor(private readonly location: Location) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.location.forward()
  }

}
