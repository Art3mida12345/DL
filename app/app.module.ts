import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NgCalendarModule } from 'ionic2-calendar';
import localeUK from '@angular/common/locales/uk';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeUK);

@NgModule({
  declarations: [MyApp, AboutPage, HomePage, TabsPage],
  imports: [BrowserModule, NgCalendarModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, HomePage, TabsPage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: LOCALE_ID,
      useValue: 'uk',
    },
  ],
})
export class AppModule {}
