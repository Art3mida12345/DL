import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import moment = require('moment');
import {
  FILTRED_BY_TEACHER,
  FIXED_SCHEDULE,
  RES_SCHEDULE,
  RES_SCHEDULE_NEW,
} from './intervals';

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
    var events = RES_SCHEDULE_NEW;
    //FIXED_SCHEDULE;
    //RES_SCHEDULE;
    /*this.get().map((e) => ({
      //FILTRED_BY_TEACHER;
      title: e.count.toString(),
      startTime: e.startTime.toDate(),
      endTime: e.endTime.toDate(),
      allDay: false,
    }));*/

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
    const sorted = FILTRED_BY_TEACHER.map((itv) => ({
      ...itv,
      startTime: moment(itv.startTime),
      endTime: moment(itv.endTime),
      count: 1,
    }));

    // merge
    for (let j = 0; j < sorted.length - 1; j++) {
      for (let i = j + 1; i < sorted.length; i++) {
        if (
          (sorted[i].startTime >= sorted[j].startTime &&
            sorted[i].startTime <= sorted[j].endTime) ||
          (sorted[j].startTime >= sorted[i].startTime &&
            sorted[j].startTime <= sorted[i].endTime)
        ) {
          sorted[j].count++;
        }
      }
    }

    const result = [];
    // remove duplicates
    for (let j = 0; j < sorted.length; j++) {
      const items = sorted
        .slice(j + 1, sorted.length)
        .filter(
          (p) =>
            p.startTime.isSame(sorted[j].startTime) &&
            p.endTime.isSame(sorted[j].endTime)
        );
      const itemCount = sorted
        .filter(
          (p) =>
            p.startTime.isSame(sorted[j].startTime) &&
            p.endTime.isSame(sorted[j].endTime)
        )
        .sort((a) => a.count);

      if (items.length === 0) {
        sorted[j].count = itemCount[0].count;
        result.push(sorted[j]);
      }
    }

    return result;
  }
}
