import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cms-angular7';
  constructor(
    private translate: TranslateService

  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.translate.setDefaultLang('default');
  }
}
