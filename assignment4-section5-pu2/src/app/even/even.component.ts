import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
    display : string;
    @Input('dataOutput') element:number;
    constructor() { }

    ngOnChanges(): void {
        if(this.element != null && this.element  % 2 === 0 ){
            this.display = 'EvenComponent called!--- '+this.element;
        }else{
            this.display = '';
        }
        
      }

    ngOnInit(): void { }
}
