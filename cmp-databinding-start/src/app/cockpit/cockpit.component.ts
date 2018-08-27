import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  newServerName = '';
  newServerContent = '';
  

  constructor() {
    
   }

  ngOnInit() {
  }

  onAddServer(nameInput : HTMLInputElement) {
    this.serverContentInput.nativeElement.value = '222222';    
    this.serverCreated.emit(
      {
        
        // serverName:this.newServerName,
        serverName:nameInput.value,
        // serverContent:this.newServerContent
        serverContent:this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(nameInput : HTMLInputElement,_serverContentInput:HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        // serverName:this.newServerName,
        serverName:nameInput.value,
        // serverContent:this.newServerContent
        serverContent:_serverContentInput.value
      });
  }

}
