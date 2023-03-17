import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import moment = require('moment');
import { BY_STUDENTS, FILTRED_BY_TEACHER, MERGED_INTERVALS } from './intervals';

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
    var events = this.get()
      .sort((e) => e.count)
      .map((e) => ({
        startTime: e.startTime,
        endTime: e.endTime,
        allDay: false,
        title: e.count.toString(),
      }));

    // FILTRED_BY_TEACHER;
    // BY_STUDENTS;
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

  get() {
    const sorted = FILTRED_BY_TEACHER.sort((a, b) =>
      moment
        .max(moment(a.endTime), moment(b.endTime))
        .diff(moment.min(moment(a.startTime), moment(b.startTime)), 'minutes')
    ).map((itv) => ({
      ...itv,
      startTime: moment(itv.startTime),
      endTime: moment(itv.endTime),
      count: 0,
    }));
    let j = 0;

    for (let i = 1; i < sorted.length; i++) {
      if (sorted[j].endTime > sorted[i].startTime) {
        sorted[j].endTime = moment.max(sorted[j].endTime, sorted[i].endTime);
        sorted[j].startTime = moment.min(
          sorted[j].startTime,
          sorted[i].startTime
        );
        sorted[j].count++;
        console.log(sorted);
      } else {
        j++;
        sorted[j] = sorted[i];
      }
    }

    return sorted;
  }
}
