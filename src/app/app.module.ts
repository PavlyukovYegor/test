import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {RandomContentComponent} from './randomcontent/randomcontent.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random-content', component: RandomContentComponent}
]

@NgModule({
    imports:[BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, RandomContentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
