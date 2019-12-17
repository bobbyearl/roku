import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { RokuService } from '../services/roku.service';
import { TV } from '../models/tv.model';

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
  ].sort();

  public tvs: TV[];

  public selectedId: number;

  public duration = 3000;

  public rowHeight = 80;

  constructor (
    private snackBar: MatSnackBar,
    private rokuService: RokuService
  ) {
    this.rokuService
      .getTVs()
      .subscribe(tvs => this.tvs = tvs);
  }

  ngOnInit() { }

  public btnClick(key: string) {
    this.rokuService
      .sendKey(this.selectedId, key)
      .subscribe(
        (response: any) => {
          if (response.error) {
            this.snackBar
              .open(
                `Handled API error: ${response.error}`,
                'OK',
                { duration: this.duration }
              );
          }
        },
        err => this.snackBar
          .open(
            `Fatal Error\n${err}`,
            'OK',
            { duration: this.duration }
          )
      );
  }

}
