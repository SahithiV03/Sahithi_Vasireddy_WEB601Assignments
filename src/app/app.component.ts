import { Component } from '@angular/core';
import { Content } from './models/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sahithi_Vasireddy_contentlist';
 

  constructor() {}

  ngOnInit() {
    this.addData();
  }


  addData(){

  }


}
