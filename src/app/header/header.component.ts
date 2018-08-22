import { Component, OnInit } from '@angular/core';
import { AppLanguageService } from '../app-shared-service/app.shared.language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appLanguageSelected : string = 'english';
  constructor(private appLanguageService: AppLanguageService) { }

  ngOnInit() {
    this.appLanguageService.appLanguageSubject.subscribe(
      (languageSelected: string) => {
        this.appLanguageSelected = languageSelected;
      }
    )
  }

}
