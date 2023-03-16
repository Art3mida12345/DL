import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';

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
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function (date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function (date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function (date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function (date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function (date: Date) {
        return 'testDT';
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
    var events = [
      {
        title: 'Student 1',
        start: '2023-03-13T05:00:00.000Z',
        end: '2023-03-13T07:45:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
      {
        title: 'Student 1',
        start: '2023-03-13T11:00:00.000Z',
        end: '2023-03-13T12:00:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
      {
        title: 'Student 1',
        start: '2023-03-13T17:00:00.000Z',
        end: '2023-03-13T18:45:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
      {
        title: 'Student 1',
        start: '2023-03-14T05:00:00.000Z',
        end: '2023-03-14T07:45:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
      {
        title: 'Student 1',
        start: '2023-03-14T10:00:00.000Z',
        end: '2023-03-14T13:00:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
      {
        title: 'Student 1',
        start: '2023-03-15T16:00:00.000Z',
        end: '2023-03-15T18:00:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
      {
        title: 'Student 1',
        start: '2023-03-15T16:00:00.000Z',
        end: '2023-03-15T18:00:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
      {
        title: 'Student 2',
        start: '2023-03-13T05:00:00.000Z',
        end: '2023-03-13T07:45:00.000Z',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        allDay: false,
        resizable: { beforeStart: false, afterEnd: false },
        draggable: false,
      },
    ].map((date) => ({
      ...date,
      allDay: false,
      startTime: new Date(date.start),
      endTime: new Date(date.end),
    }));

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
