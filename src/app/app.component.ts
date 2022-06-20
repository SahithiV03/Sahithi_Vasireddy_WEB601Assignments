import { Component } from '@angular/core';
import { Content } from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sahithi_Vasireddy_contentlist';
  cards:Content[] = [];

  constructor() {}

  ngOnInit() {
    this.addData();
  }


  addData(){
    const listClass = new List();
    for(let i=0;i<4;i++){
      listClass.addContentItem({
      id: i,
      title: "title" + i,
      body: "body"+ i,
      author: "author"+ i,
      imageLink: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg",
      type: "type" +i,
      hashtags: ["tag"+i]
    });
  }
  this.cards = listClass.contentData; 
  }


}
