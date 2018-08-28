import { Component, OnInit } from '@angular/core';
import { AppLanguageService } from '../app-shared-service/app.shared.language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appLanguageSelected : string = 'english';
  loggedInUser: string = '';
  validUser: boolean = false;
  
  constructor(private appLanguageService: AppLanguageService) { }

  ngOnInit() {
    this.appLanguageService.appLanguageSubject.subscribe(
      (languageSelected: string) => {
        this.appLanguageSelected = languageSelected;
      }
    )

    this.appLanguageService.userName.subscribe(
      (userName: string) => {
        this.loggedInUser = userName;
      }
    )

    this.appLanguageService.validUser.subscribe(
      (isValidSession: string) => {
        if(isValidSession === "true") {
          this.validUser = true;
        } else {
          this.validUser = false;
        }
      }
    )
    
  }

}
