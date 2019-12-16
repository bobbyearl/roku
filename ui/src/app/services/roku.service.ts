import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

@Injectable()
export class RokuService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public sendKey(key: string): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/api/${key}`, {});
  }
}
