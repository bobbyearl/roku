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
  environment
} from '../../environments/environment';

import {
  TV
} from '../models/tv.model';

@Injectable()
export class RokuService {
  private base = environment.bff;

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
