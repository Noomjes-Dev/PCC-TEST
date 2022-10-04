import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private readonly location: Location,) { }

  ngOnInit(): void {
  }
  submit() {
    alert('Submitted')
    this.location.back()
  }
}
