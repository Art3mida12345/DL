import moment = require('moment');
import { count } from 'rxjs/operator/count';

const STUDENTS = [
  'Cт1',
  'Cт2',
  'Cт3',
  /*'Cт4',
  'Cт5',
  'Cт6',*/
  /*'Cт7',
  'Cт8',
  'Cт9',*/
];

const TEACHERS = ['В1'];

interface Availability {
  start: string;
  end: string;
  dayOfWeek: number;
}

export interface CalendarEvent {
  startTime: Date;
  endTime: Date;
  title: string;
  allDay: boolean;
}

moment.locale('UAH');
const DATE_BASE = moment().startOf('week').add(1, 'day').set('hours', 0);
console.log(DATE_BASE);

const STUDENTS_AVAILABILITY: { [key: string]: Availability[] } = {
  [STUDENTS[0]]: [
    {
      start: '07:00',
      end: '09:45',
      dayOfWeek: 0,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 0,
    },
    {
      start: '19:00',
      end: '20:45',
      dayOfWeek: 0,
    },
    {
      start: '07:00',
      end: '09:45',
      dayOfWeek: 1,
    },
    {
      start: '12:00',
      end: '15:00',
      dayOfWeek: 1,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 2,
    },
    {
      start: '07:00',
      end: '10:00',
      dayOfWeek: 5,
    },
    {
      start: '17:00',
      end: '20:00',
      dayOfWeek: 6,
    },
  ],
  [STUDENTS[1]]: [
    {
      start: '08:00',
      end: '10:45',
      dayOfWeek: 0,
    },
    {
      start: '12:00',
      end: '13:00',
      dayOfWeek: 0,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 0,
    },
    {
      start: '08:00',
      end: '10:45',
      dayOfWeek: 1,
    },
    {
      start: '12:00',
      end: '13:00',
      dayOfWeek: 1,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 1,
    },
    {
      start: '07:00',
      end: '14:00',
      dayOfWeek: 5,
    },
    {
      start: '11:00',
      end: '14:00',
      dayOfWeek: 6,
    },
    {
      start: '19:00',
      end: '20:00',
      dayOfWeek: 6,
    },
  ],
  [STUDENTS[2]]: [
    {
      start: '07:00',
      end: '09:45',
      dayOfWeek: 1,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 1,
    },
    {
      start: '19:00',
      end: '20:00',
      dayOfWeek: 1,
    },
    {
      start: '13:00',
      end: '20:00',
      dayOfWeek: 3,
    },
    {
      start: '09:00',
      end: '20:00',
      dayOfWeek: 5,
    },
    {
      start: '09:00',
      end: '20:00',
      dayOfWeek: 6,
    },
  ],
  /*[STUDENTS[3]]: [
    {
      start: '06:00',
      end: '11:00',
      dayOfWeek: 0,
    },
    {
      start: '13:00',
      end: '15:00',
      dayOfWeek: 0,
    },
    {
      start: '20:00',
      end: '21:00',
      dayOfWeek: 0,
    },
    {
      start: '06:00',
      end: '11:00',
      dayOfWeek: 2,
    },
    {
      start: '13:00',
      end: '15:00',
      dayOfWeek: 2,
    },
    {
      start: '20:00',
      end: '21:00',
      dayOfWeek: 2,
    },
    {
      start: '18:00',
      end: '21:00',
      dayOfWeek: 3,
    },
    {
      start: '18:00',
      end: '21:00',
      dayOfWeek: 4,
    },
    {
      start: '13:00',
      end: '15:00',
      dayOfWeek: 5,
    },
    {
      start: '15:00',
      end: '18:00',
      dayOfWeek: 6,
    },
  ],
  [STUDENTS[4]]: [
    {
      start: '06:30',
      end: '11:30',
      dayOfWeek: 0,
    },
    {
      start: '13:00',
      end: '14:35',
      dayOfWeek: 0,
    },
    {
      start: '19:00',
      end: '21:00',
      dayOfWeek: 0,
    },
    {
      start: '06:30',
      end: '11:30',
      dayOfWeek: 3,
    },
    {
      start: '13:00',
      end: '14:35',
      dayOfWeek: 3,
    },
    {
      start: '19:00',
      end: '21:00',
      dayOfWeek: 3,
    },
    {
      start: '18:00',
      end: '21:00',
      dayOfWeek: 4,
    },
    {
      start: '07:00',
      end: '15:00',
      dayOfWeek: 5,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 5,
    },
    {
      start: '07:30',
      end: '15:00',
      dayOfWeek: 6,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 6,
    },
  ],
  [STUDENTS[5]]: [
    {
      start: '14:00',
      end: '15:45',
      dayOfWeek: 0,
    },
    {
      start: '07:00',
      end: '09:45',
      dayOfWeek: 1,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 1,
    },
    {
      start: '19:00',
      end: '20:00',
      dayOfWeek: 1,
    },
    {
      start: '07:00',
      end: '09:45',
      dayOfWeek: 2,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 2,
    },
    {
      start: '17:00',
      end: '20:00',
      dayOfWeek: 2,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 3,
    },
    {
      start: '17:00',
      end: '20:00',
      dayOfWeek: 3,
    },
    {
      start: '07:00',
      end: '10:00',
      dayOfWeek: 5,
    },
    {
      start: '18:00',
      end: '21:00',
      dayOfWeek: 5,
    },
    {
      start: '07:00',
      end: '11:00',
      dayOfWeek: 6,
    },
    {
      start: '19:00',
      end: '20:00',
      dayOfWeek: 6,
    },
  ],
  [STUDENTS[6]]: [
    {
      start: '05:00',
      end: '11:00',
      dayOfWeek: 1,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 1,
    },
    {
      start: '19:00',
      end: '20:00',
      dayOfWeek: 2,
    },
    {
      start: '05:00',
      end: '9:45',
      dayOfWeek: 3,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 3,
    },
    {
      start: '19:00',
      end: '20:00',
      dayOfWeek: 3,
    },
    {
      start: '05:00',
      end: '11:00',
      dayOfWeek: 4,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 4,
    },
    {
      start: '07:00',
      end: '20:00',
      dayOfWeek: 5,
    },
  ],
  [STUDENTS[7]]: [
    {
      start: '07:00',
      end: '12:45',
      dayOfWeek: 0,
    },
    {
      start: '16:00',
      end: '20:00',
      dayOfWeek: 0,
    },
    {
      start: '07:00',
      end: '12:00',
      dayOfWeek: 2,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 2,
    },
    {
      start: '16:00',
      end: '20:00',
      dayOfWeek: 2,
    },
    {
      start: '09:00',
      end: '11:45',
      dayOfWeek: 3,
    },
    {
      start: '16:00',
      end: '20:00',
      dayOfWeek: 3,
    },
    {
      start: '12:00',
      end: '20:00',
      dayOfWeek: 5,
    },
    {
      start: '17:00',
      end: '20:00',
      dayOfWeek: 6,
    },
  ],
  [STUDENTS[8]]: [
    {
      start: '08:00',
      end: '10:45',
      dayOfWeek: 0,
    },
    {
      start: '12:00',
      end: '13:00',
      dayOfWeek: 0,
    },
    {
      start: '16:00',
      end: '18:00',
      dayOfWeek: 0,
    },
    {
      start: '20:00',
      end: '21:00',
      dayOfWeek: 0,
    },
    {
      start: '08:00',
      end: '10:45',
      dayOfWeek: 3,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 3,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 3,
    },
    {
      start: '07:00',
      end: '10:00',
      dayOfWeek: 5,
    },
    {
      start: '16:00',
      end: '21:00',
      dayOfWeek: 5,
    },
    {
      start: '11:00',
      end: '18:00',
      dayOfWeek: 6,
    },
  ],*/
};

const TEACHER_AVAILABILITY: { [key: string]: Availability[] } = {
  // Вчитель
  [TEACHERS[0]]: [
    {
      start: '09:00',
      end: '12:00',
      dayOfWeek: 0,
    },
    {
      start: '16:00',
      end: '20:00',
      dayOfWeek: 0,
    },
    {
      start: '06:00',
      end: '10:00',
      dayOfWeek: 1,
    },
    {
      start: '16:00',
      end: '18:00',
      dayOfWeek: 1,
    },
    {
      start: '16:00',
      end: '18:00',
      dayOfWeek: 2,
    },
    {
      start: '19:00',
      end: '21:00',
      dayOfWeek: 2,
    },
    {
      start: '08:00',
      end: '12:00',
      dayOfWeek: 3,
    },
    {
      start: '14:00',
      end: '17:00',
      dayOfWeek: 3,
    },
    {
      start: '20:00',
      end: '21:00',
      dayOfWeek: 3,
    },
    {
      start: '09:00',
      end: '12:00',
      dayOfWeek: 5,
    },
    {
      start: '19:00',
      end: '21:00',
      dayOfWeek: 5,
    },
    {
      start: '08:00',
      end: '13:00',
      dayOfWeek: 6,
    },
    {
      start: '20:00',
      end: '21:00',
      dayOfWeek: 6,
    },
  ],
};

export const BY_STUDENTS: CalendarEvent[] = STUDENTS.reduce(
  (prev: CalendarEvent[], cur: string) => {
    prev.push(
      ...STUDENTS_AVAILABILITY[cur]?.map((item) => ({
        title: cur,
        startTime: moment(DATE_BASE)
          .add(item.dayOfWeek, 'days')
          .add(item.start.split(':')[0], 'hours')
          .add(item.start.split(':')[1], 'minutes')
          .toDate(),
        endTime: moment(DATE_BASE)
          .add(item.dayOfWeek, 'days')
          .add(item.end.split(':')[0], 'hours')
          .add(item.end.split(':')[1], 'minutes')
          .toDate(),
        allDay: false,
      }))
    );

    return prev;
  },
  []
);

const BY_TEACHER: CalendarEvent[] = TEACHER_AVAILABILITY[TEACHERS[0]]?.map(
  (item) => ({
    title: TEACHERS[0],
    startTime: moment(DATE_BASE)
      .add(item.dayOfWeek, 'days')
      .add(item.start.split(':')[0], 'hours')
      .add(item.start.split(':')[1], 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(item.dayOfWeek, 'days')
      .add(item.end.split(':')[0], 'hours')
      .add(item.end.split(':')[1], 'minutes')
      .toDate(),
    allDay: false,
  })
);

let result: CalendarEvent[] = [];
BY_STUDENTS.forEach((ast) => {
  BY_TEACHER.forEach((t) => {
    const start1 = moment(ast.startTime);
    const end1 = moment(ast.endTime);
    const start2 = moment(t.startTime);
    const end2 = moment(t.endTime);

    if (
      (start1 >= start2 && start1 <= end2) ||
      (start2 >= start1 && start2 <= end1)
    ) {
      const resultStart = moment.max(start1, start2);
      const resultEnd = moment.min(end1, end2);

      if (
        !resultStart.isSame(resultEnd) &&
        resultEnd.diff(resultStart, 'minutes') >= 45
      ) {
        result.push({
          title: ast.title,
          startTime: resultStart.toDate(),
          endTime: resultEnd.toDate(),
          allDay: false,
        });
      } else {
        console.log(resultStart, resultEnd);
      }
    }
  });

  return result;
});
export const FILTRED_BY_TEACHER = result;
console.log(JSON.stringify(FILTRED_BY_TEACHER));

export const RES_SCHEDULE = [
  // COURSE 3
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(9, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(9, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(2, 'days')
      .add(19, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(2, 'days')
      .add(19, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(8, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(8, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(19, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(19, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },

  // 2
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(10, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(10, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(2, 'days')
      .add(20, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(20, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(20, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(20, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  // 1
  {
    title: 'К-1',
    startTime: moment(DATE_BASE)
      .add(1, 'days')
      .add(7, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(7, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-1',
    startTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(9, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(9, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
];

export const FIXED_SCHEDULE = [
  // COURSE 3
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(18, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(18, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(1, 'days')
      .add(18, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(1, 'days')
      .add(18, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(18, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(18, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(4, 'days')
      .add(18, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(4, 'days')
      .add(18, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },

  // 2
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(17, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(17, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(2, 'days')
      .add(17, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(17, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(4, 'days')
      .add(17, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(4, 'days')
      .add(17, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },

  // 1
  {
    title: 'К-1',
    startTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(12, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(12, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-1',
    startTime: moment(DATE_BASE)
      .add(6, 'days')
      .add(12, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(6, 'days')
      .add(12, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
];

export const RES_SCHEDULE_NEW = [
  // COURSE 3
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(9, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(9, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(2, 'days')
      .add(19, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(2, 'days')
      .add(19, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(8, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(3, 'days')
      .add(8, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-3',
    startTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(19, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(19, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },

  // 2
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(10, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(10, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(2, 'days')
      .add(20, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(20, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-2',
    startTime: moment(DATE_BASE)
      .add(6, 'days')
      .add(8, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(6, 'days')
      .add(8, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  // 1
  {
    title: 'К-1',
    startTime: moment(DATE_BASE)
      .add(1, 'days')
      .add(7, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(0, 'days')
      .add(7, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
  {
    title: 'К-1',
    startTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(9, 'hours')
      .add(0, 'minutes')
      .toDate(),
    endTime: moment(DATE_BASE)
      .add(5, 'days')
      .add(9, 'hours')
      .add(45, 'minutes')
      .toDate(),
    allDay: false,
  },
];
