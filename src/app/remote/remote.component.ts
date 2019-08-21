import { Component, OnInit } from '@angular/core';
import { RokuService } from '../services/roku.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

  constructor(
    private rokuService: RokuService
  ) { }

  ngOnInit() { }

  public btnClick(key: string) {
    console.log('button', key);
    this.rokuService
      .sendKey(key)
      .subscribe(() => {
        console.log('done');
      });
  }

}
