import { Component, OnInit } from '@angular/core';

export interface Years {
  value: string
  yearNo: string
}

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  years: Years[] = [
    { value: "01", yearNo: '2022' },
    { value: "02", yearNo: '2021' },
    { value: "03", yearNo: '2020' },
  ]

  year: Years | any;
  yearNow = new Date().getFullYear();



  constructor() { }

  ngOnInit(): void {
  }

  selectMonth(month: any) {
    console.log(month);
  }

  onYearChange(event: any) {
    this.year = event.target.value;
    console.log(this.year);
  }

}
