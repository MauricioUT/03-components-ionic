import { Component, ViewChild, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-date-tame',
  templateUrl: './date-tame.page.html',
  styleUrls: ['./date-tame.page.scss'],
})
export class DateTamePage implements OnInit {

  fechaNac: Date = new Date();
  dateValue2: Date = new Date();

  @ViewChild('popoverDatetime6', { static: true }) datetime: IonDatetime;

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(date) {
    this.fechaNac = new Date(date.detail.value);
    console.log(date);
    console.log(new Date(date.detail.value));
  }

  formatDate(value: string) {
    return new Date(format(parseISO(value), 'MMM dd yyyy'));
  }

  formatDate2(value: string) {
    return new Date(format(parseISO(value), 'MMM dd yyyy : HH mm ss'));
  }

  confirm() {
    this.datetime.confirm();
  }
  
  reset() {
    this.datetime.reset();
  }

}
