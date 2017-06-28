import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Job} from './job';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';

@Injectable()
export class JobService {

  private searchUrl = 'jobservice/api/_search/jobs';

  constructor(private http: Http) {
  }

  search(term: string): Observable<Job[]> {
   const params: URLSearchParams = new URLSearchParams();
    const options: RequestOptions = new RequestOptions();

    params.set('query', term || '*');
    options.params = params;

    return this.http.get(this.searchUrl, options)
      .map((response: Response) => {
        return response.json();
      });
  }
}
