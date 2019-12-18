import { Component, HostListener, OnInit } from '@angular/core';
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

  public rowHeight = 80;


  private keyCodeMap = {
    'ArrowLeft': 'left',
    'ArrowUp': 'up',
    'ArrowRight': 'right',
    'ArrowDown': 'down',
    ' ': 'play',
    'Enter': 'select'
  };

  constructor(
    private snackBar: MatSnackBar,
    private rokuService: RokuService
  ) {
    this.rokuService
      .getTVs()
      .subscribe(
        tvs => {
          this.tvs = tvs;
          this.selectedId = this.tvs[0].id;
        },
        err => this.showError(err.message)
      );
  }

  ngOnInit() { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    const key = this.keyCodeMap[event.key] ? this.keyCodeMap[event.key] : event.key;
    this.sendKey(key);
  }

  public btnClick(key: string) {
    this.sendKey(key);
  }

  private sendKey(key: string) {
    this.rokuService
      .sendKey(this.selectedId, key)
      .subscribe(
        (response: any) => {
          if (response.error) {
            this.showError(response.error);
          }
        },
        err => this.showError(err.message)
      );
  }

  private showError(message: string) {
    this.snackBar
      .open(
        message,
        'OK',
        {
          duration: 5000
        }
      );
  }

}
