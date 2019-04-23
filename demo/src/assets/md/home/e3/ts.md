```typescript
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('passwordComponentWithConfirmation')
  passwordComponentWithConfirmation: MatPasswordStrengthComponent;
  showDetails: boolean;

  ngOnInit() {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }
}
```
