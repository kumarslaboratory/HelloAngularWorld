import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // #region ## Properties OR Fields ##

  // #endregion

  // #region ## Constructor ##
  constructor(@Inject(String) private _url: string, protected _http: HttpClient) {
    //console.log('Post Service Constructor Called');
  }

  // #endregion

  // #region ## CRUD Methods ##
  
  getAll() : Observable<any>{
    return this._http.get<any>(this._url).pipe(catchError(this.errorHandle));
  }

  create(resourse: any): Observable<any>{
    return this._http.post<any>(this._url, resourse).pipe(catchError(this.errorHandle));
  }

  update(resource : any) : Observable<any>{
    return this._http.patch(this._url + '/' + resource.id, JSON.stringify(resource)).pipe(catchError(this.errorHandle));
  }

  delete(id : number) : Observable<any>{
    return this._http.delete(this._url + '/' + id).pipe(catchError(this.errorHandle));
  }

  // #endregion

  // #region ## Private Methods ##

  private errorHandle(error: HttpErrorResponse){
    if (error.status === 404) {
      //return throwError(new NotFoundError());
      error.message
      return throwError(() => new Error('NotFound error!' + error.message + '; please try again later.'));
    }
    if (error.status === 400) {
      //return throwError(new BadInput(error.json()));
      return throwError(() => new Error('BadInput error!' + error.message + '; please try again later.'));
    }
    //return throwError(new AppError(error));
    return throwError(() => new Error('Application error!' + error.message + '; please try again later.'));
  }

  // #endregion
}

