import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { HighlightPipe } from './highlight.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HoverEffectPipe,
    TasksComponent,
    HighlightPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule
    
  ],  
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
