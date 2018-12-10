import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {filter} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
              private translate: TranslateService,
              @Inject(PLATFORM_ID) private platformId: Object) {

    this.translate.addLangs(['en', 'de', 'fr']);
    this.translate.setDefaultLang('de');

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      if (isPlatformBrowser(this.platformId)) {
        window.scroll(0, 0);
      }
    });
  }
}
