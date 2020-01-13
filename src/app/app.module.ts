import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {counterReducer} from './reducers/counter.reducer';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VideoRecognitionComponent } from './components/video-recognition/video-recognition.component';


export function logger(reducer: ActionReducer<{ count: number }>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppComponent,
    VideoRecognitionComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}, {metaReducers}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
