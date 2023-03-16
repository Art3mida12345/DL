import moment = require('moment');

const STUDENTS = [
  'Student 1',
  'Student 2',
  'Student 3',
  'Student 4',
  'Student 5',
  'Student 6',
  'Student 7',
  'Student 8',
  'Student 9',
];

interface Availability {
  start: string;
  end: string;
  dayOfWeek: number;
}
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

interface CalendarEvent {
  start: Date;
  end: Date;
  title: string;
  color: {};
  allDay: boolean;
  resizable: {
    beforeStart: boolean;
    afterEnd: boolean;
  };
  draggable: boolean;
}

moment.locale('UAH');
const DATE_BASE = moment().startOf('week').add(2, 'day').startOf('day');
console.log(DATE_BASE);

const STUDENTS_AVAILABILITY: { [key: string]: Availability[] } = {
  [STUDENTS[0]]: [
    {
      start: '07:00',
      end: '9:45',
      dayOfWeek: 1,
    },
    {
      start: '13:00',
      end: '14:00',
      dayOfWeek: 1,
    },
    {
      start: '19:00',
      end: '20:45',
      dayOfWeek: 1,
    },
    {
      start: '07:00',
      end: '9:45',
      dayOfWeek: 2,
    },
    {
      start: '12:00',
      end: '15:00',
      dayOfWeek: 2,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 3,
    },
    {
      start: '18:00',
      end: '20:00',
      dayOfWeek: 3,
    },
  ],
  [STUDENTS[1]]: [
    {
      start: '07:00',
      end: '9:45',
      dayOfWeek: 1,
    },
  ],
  [STUDENTS[2]]: [],
  [STUDENTS[3]]: [],
  [STUDENTS[4]]: [],
  [STUDENTS[5]]: [],
  [STUDENTS[6]]: [],
  [STUDENTS[7]]: [],
  [STUDENTS[8]]: [],
};

export const BY_STUDENTS: CalendarEvent[] = STUDENTS.reduce(
  (prev: CalendarEvent[], cur: string) => {
    prev.push(
      ...STUDENTS_AVAILABILITY[cur]?.map((item) => ({
        title: cur,
        start: DATE_BASE.set('weekday', item.dayOfWeek)
          .set('hour', +item.start.split(':')[0])
          .set('minute', +item.start.split(':')[1])
          .toDate(),
        end: DATE_BASE.set('weekday', item.dayOfWeek)
          .set('hour', +item.end.split(':')[0])
          .set('minute', +item.end.split(':')[1])
          .toDate(),
        color: colors.red,
        allDay: false,
        resizable: {
          beforeStart: false,
          afterEnd: false,
        },
        draggable: false,
      }))
    );

    return prev;
  },
  []
);

console.log(JSON.stringify(BY_STUDENTS));
