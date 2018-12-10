import {Component, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'app-info-comp-example',
  templateUrl: './info-comp-example.component.html',
  styleUrls: ['./info-comp-example.component.scss']
})
export class InfoCompExampleComponent {

  lang: string;
  inputType = 'password';

  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang ? this.translate.currentLang : this.translate.getDefaultLang();
  }

  changeLanguage(event: MatRadioChange) {
    this.translate.use(event.value);
  }

}
