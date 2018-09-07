import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    interval;
    number : number;
    
    @Output() serverCreated = new EventEmitter<{counterValue:number}>();

    constructor() { }
    ngOnInit(): void { }
    onClickStart(){
        console.log('Game started');
        this.interval = setInterval(()=>{ 
          this.number= Math.floor((Math.random() * 100) + 1);
          this.serverCreated.emit({
            counterValue : this.number
          });
        //   console.log(this.number);
        },2000);
    }
    onClickStop(){
        if (this.interval) {
            clearInterval(this.interval);
         }
         this.number= null;
         console.log('Game stopped');
    }
}
