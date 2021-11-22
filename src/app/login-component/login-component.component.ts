import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/AuthService';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,) { }

  ngOnInit(): void {
  }
  tryGoogleLogin(): void {
    this.authService.doGoogleLogin()
      .then(() => this.successRedirect())
      .catch(error => console.log(error))
      .finally(() => {
      });
  }

  successRedirect(): void {
    // noinspection JSIgnoredPromiseFromCall
    this.ngZone.run(() => this.router.navigate(['/']));
  }

}
