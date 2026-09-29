import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventList } from '../../event-list/event-list';

@Component({
  selector: 'app-home',
  imports: [FormsModule, EventList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  eventName:String="Eventify"
  inputItem:String=""
  click(){
    return alert("Button Clicked");
  }
}
