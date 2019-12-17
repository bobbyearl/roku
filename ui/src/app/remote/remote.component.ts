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

  private keyCodeMap = {
    left: 'ArrowLeft',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    play: 'Space',
    select: 'Enter'
  };

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
      .subscribe(tvs => {
        this.tvs = tvs;
        this.selectedId = this.tvs[0].id;
      });
  }

  ngOnInit() { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    Object.keys(this.keyCodeMap).some(name => {
      if (this.keyCodeMap[name] === event.code) {
        this.sendKey(name);
        return true;
      }
    });
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
            `Fatal Error\n${JSON.stringify(err)}`,
            'OK',
            { duration: this.duration }
          )
      );
  }

}
