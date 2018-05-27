import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  password: string;
  inputType = 'password';
  showDetails: boolean;
  showDetails2: boolean;
  color = '';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-material-password-strength');
  }

  onStrengthChanged(strength: number) {
    console.log("password strength = ", strength);
  }

  onSlideToggleChange(event: MatSlideToggleChange) {
    event.checked ? this.inputType = 'text' : this.inputType = 'password';
  }

}
