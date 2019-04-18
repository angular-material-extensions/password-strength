```typescript
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  password: string;
  showDetails: boolean;
  showDetails2: boolean;

  viewSource: boolean;
  viewSource2: boolean;
  color = '';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | @angular-material-extensions/password-strength');
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }
}
```
