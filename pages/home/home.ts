import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import moment = require('moment');
import { BY_STUDENTS, FILTRED_BY_TEACHER } from './intervals';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  eventSource;
  viewTitle;

  isToday: boolean;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date(),
    dateFormatter: {
      formatWeekViewDayColumn: function (date: Date) {
        return moment(date).format('dd');
      },
      formatWeekViewHourColumn: function (date: Date) {
        return moment(date).format('HH');
      },
    },
  };

  constructor(private navController: NavController) {}

  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log(
      'Event selected:' +
        event.startTime +
        '-' +
        event.endTime +
        ',' +
        event.title
    );
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {
    console.log(
      'Selected time: ' +
        ev.selectedTime +
        ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) +
        ', disabled: ' +
        ev.disabled
    );
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  createRandomEvents() {
    var events = FILTRED_BY_TEACHER;
    //BY_STUDENTS;
    console.log(JSON.stringify(events));
    return events;
  }

  onRangeChanged(ev) {
    console.log(
      'range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime
    );
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };
}
