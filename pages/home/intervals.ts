import moment = require('moment');

const STUDENTS = [
  'Cт1',
  'Cт2',
  'Cт3',
  'Cт4',
  'Cт5',
  'Cт6',
  'Cт7',
  'Cт8',
  'Cт9',
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
      start: '07:00',
      end: '09:45',
      dayOfWeek: 0,
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

console.log(JSON.stringify(BY_STUDENTS));
