import { Component, OnInit } from '@angular/core';
import { RokuService } from '../services/roku.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {

  public keys = [
    'home',
    'rev',
    'fwd',
    'play',
    'select',
    'left',
    'right',
    'down',
    'up',
    'back',
    'replay',
    'info',
    'backspace',
    'enter',
    'volumeDown',
    'volumeUp',
    'volumeMute',
    'inputTuner',
    'inputHDMI1',
    'inputHDMI2',
    'inputHDMI3',
    'inputHDMI4',
    'inputAV1',
    'channelUp',
    'channelDown'
  ];

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
