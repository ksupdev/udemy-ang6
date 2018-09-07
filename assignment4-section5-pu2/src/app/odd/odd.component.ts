import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-odd',
    templateUrl: './odd.component.html',
    styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
    @Input('dataOutput') element:number;
    display : string;
    constructor() { }

    ngOnChanges(): void {

        if(this.element != null && this.element  % 2 !== 0 ){
            this.display = 'OddComponent called!--- '+this.element;
        }else{
            this.display = '';
        }
        
      }

    ngOnInit(): void { }
}
