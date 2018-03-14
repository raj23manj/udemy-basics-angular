import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Test';
  userName = '';
  serverCreated=false;
  servers: string[] = ['T1', 'T2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server  was created' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  // onUpdateServerName(event: InputEvent){
  //   console.log(event);
  //   this.serverName = event.target.value;
  // }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUser(){
    this.userName = '';
  }

// onUpdateUser(event) {
//  this.usernameEmpty = (<HTMLInputElement>event.target).value.length > 0;
//  }

}
