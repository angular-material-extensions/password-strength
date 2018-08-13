import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

}
