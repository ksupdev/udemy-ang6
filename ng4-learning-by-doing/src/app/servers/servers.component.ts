import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    
    allowNewService: boolean = false;
    serverCreationStatus: string = 'No server was created!.';
    serverName:string = 'Initial value of ServerName';
    isDisplayMessage:boolean = false;
    servers = ['Testserver','Testserver 2']

    constructor() {
        setTimeout(() => {
            this.allowNewService = true;
        }, 2000)
    }

    ngOnInit(): void { }

    onCreateServer() {
        this.isDisplayMessage = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created.';
        
    }

    // onUpdateServerName(event : any){
    //     console.log(event.target.value);
    //     this.serverName = event.target.value;
    // }

    onUpdateServerName(event : Event){
        
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
