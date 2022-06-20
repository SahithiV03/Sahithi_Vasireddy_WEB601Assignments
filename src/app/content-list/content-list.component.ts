import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  cards:Content[] = [{
    id: 1,
    title: "test1",
    body: "body1",
    author: "author1",
    imageLink: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg",
    type: "type1",
    hashtags: ["tags1"]
  }, {
    id: 2,
    title: "test2",
    body: "body1",
    author: "author1",
    imageLink: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg",
    type: "type1",
    hashtags: ["tags1"]
  }, {
    id: 3,
    title: "test3",
    body: "body1",
    author: "author1",
    imageLink: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg",
    type: "type1",
    hashtags: ["tags1"]
  }, {
    id: 4,
    title: "test4",
    body: "body1",
    author: "author1",
    imageLink: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg",
    type: "type1",
    hashtags: ["tags1"]
  }, {
    id: 5,
    title: "test5",
    body: "body1",
    author: "author1",
    imageLink: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg",
    type: "type1",
    hashtags: ["tags1"]
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
