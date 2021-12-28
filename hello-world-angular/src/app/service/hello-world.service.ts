import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponseBody } from '../model/response-body';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http: HttpClient) { }

  helloWorld(): Observable<ResponseBody> {
    return this.http.get<ResponseBody>("http://localhost:8080/hello-world")
  }


}
