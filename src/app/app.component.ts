import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/common';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullcalendar';

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    locale: esLocale,
    aspectRatio: 2,
    selectable: true,
    editable: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    dateClick: this.dateClick.bind(this),
    select: this.select.bind(this),
    eventDrop: this.eventDrop.bind(this),
    eventResize: this.eventResize.bind(this),
    events: [
      { id: '1', title: 'event 1', start: '2021-04-01 08:00', end: '2021-04-01 10:00' },
      { id: '2', title: 'event 2', start: '2021-04-02 09:00', end: '2021-04-01 11:00' },
      { id: '3', title: 'event 3', start: '2021-04-01 14:00', end: '2021-04-01 14:30' },
    ]
  };

  dateClick(arg: any) {
    console.log('date click: ', arg)
  }


  select(arg: any) {
    console.log('select: ', arg)
  }
  eventDrop(arg: any) {
    console.log('event drop: ', arg)
  }
  eventResize(arg: any) {
    console.log('event resized: ', arg)
  }

}
