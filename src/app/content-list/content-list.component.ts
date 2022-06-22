import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentArray:Content[] = [];
  searchFlag;
  constructor() { }

  ngOnInit(): void {
  }

  authorCheck(searchValue: string): void{
    let searchList = this.contentArray.filter(c => c.author == searchValue);
    if (searchList.length > 0){
      this.searchFlag = true;
    }
    else{
      this.searchFlag = false;
    }
  }

}
