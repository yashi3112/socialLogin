import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('this.user', this.user);
      this.loggedIn = (user != null);
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }

}
