import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4-section5-pu2';
  displayOutput : number;
  onResultRecieved(resultFromGameControl: { counterValue: number }) {
    this.displayOutput = resultFromGameControl.counterValue;
    console.log('Displat from App-root -- '+this.displayOutput)
  }
}
