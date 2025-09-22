import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // #region ## Properties OR Fields ##

  // Sign JWT: Secret => 814e209d-ba7b-47f9-b9f6-1d6282c64144

  adminToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInVzZXJOYW1lIjoiQWRtaW4iLCJpc0FkbWluIjp0cnVlfQ.rKJhiLmVaLWu5NgNfpCZNLz5vJCEsNA1X0i1sVHTd1Y';
  userToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdXNlci5jb20iLCJ1c2VyTmFtZSI6IlVzZXIiLCJpc0FkbWluIjpmYWxzZX0.ETNWv_JZoBweywPhZARROQ7veEF8D3-i-BeUTqOLoz0';

  // #endregion

  // #region ## Constructor ##

  constructor(_http: HttpClient) {
    //console.log('Users Service Constructor Called');
  }

  // #endregion

  // #region ## Getters and Setters ##
  
  get userName(): string | null {
    let userName = new JwtHelperService().decodeToken(this.tokenGetter() as string);
    return userName ? userName['userName'] : null;
  }

  get isAdmin(): boolean {
    let isAdmin = new JwtHelperService().decodeToken(this.tokenGetter() as string);
    return isAdmin ? isAdmin['isAdmin'] : false;
  }

  // #endregion

  // #region ## Methods ##

  login(credentials: { email: string; password: string }) : boolean {
    // Implement login logic here, e.g., send credentials to the server
    if((credentials.email as string).toLowerCase() === 'admin@admin.com' && (credentials.password as string) === 'Admin@123')
    {
        localStorage.setItem('token', this.adminToken);
        return true;
    }

    if((credentials.email as string).toLowerCase() === 'user@user.com' && (credentials.password as string) === 'User@123')
    {
        localStorage.setItem('token', this.userToken);
        return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  tokenGetter(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return new JwtHelperService().isTokenExpired(this.tokenGetter() as string) ? false : true;
  }

  //#endregion
}
