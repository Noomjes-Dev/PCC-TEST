import { Component, OnInit } from '@angular/core';

export interface Months {
  value: string;
  name: string;
}

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  months: Months[] = [
    { value: "01", name: 'January' },
    { value: "02", name: 'February' },
    { value: "03", name: 'March' },
    { value: "04", name: 'April' },
    { value: "05", name: 'May' },
    { value: "06", name: 'June' },
    { value: "07", name: 'July' },
    { value: "08", name: 'August' },
    { value: "09", name: 'September' },
    { value: "10", name: 'Octorber' },
    { value: "11", name: 'November' },
    { value: "12", name: 'December' },
  ]

  month: Months | any;

  monthNow = "";
  // yearNow = new Date().getFullYear();
  monthDisable = (d: Date): boolean => {
    const date = d.getDate();
    return date === 0 || date === 6;
  }

  constructor() { }

  ngOnInit(): void {
  }

  selectMonth(month: any) {
    console.log(month);
  }

  onMonthChange(event: any) {
    this.month = event.target.value;
    console.log(this.month);
  }

}
