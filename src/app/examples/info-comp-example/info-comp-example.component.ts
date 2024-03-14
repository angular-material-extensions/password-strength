import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatLegacyRadioChange as MatRadioChange} from '@angular/material/legacy-radio';

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
