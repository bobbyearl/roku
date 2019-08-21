import {
  Injectable
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of, defer, concat } from 'rxjs';

@Injectable()
export class RokuService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public sendKey(key: string): Observable<any> {
    const base = 'http://192.168.1.80:8060/';

    const keyDown = this.httpClient.post(`${base}keydown/${key}`, {});
    const keyUp = this.httpClient.post(`${base}keyup/${key}`, {});

    return concat(keyDown, keyUp);
  }
}
