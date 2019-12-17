import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  TV
} from '../models/tv.model';

@Injectable()
export class RokuService {
  private base = 'http://192.168.1.5/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTVs(): Observable<TV[]> {
    return this.httpClient
      .get<TV[]>(`${this.base}tvs`);
  }

  public sendKey(tvId: number, key: string): Observable<any> {
    return this.httpClient
      .post(
        `${this.base}tvs/${tvId}/keypress/${key}`,
        {}
      );
  }
}
