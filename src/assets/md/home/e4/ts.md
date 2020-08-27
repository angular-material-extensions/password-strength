```typescript
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    passwordFormGroup: FormGroup;


  ngOnInit() {
        this.passwordFormGroup = new FormGroup({
        password: new FormControl()
    });


      this.passwordFormGroup
      .get('password')
      .valueChanges
      .subscribe(value => console.log('Reactive Forms --> password value (strength 0-100) -->', value));
  }
  
}
```
