import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  contentD;
  constructor(public content:ContentService, private _Activatedroute:ActivatedRoute) {

    const id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(id, 'd');
   }

  ngOnInit(): void {
    this.getCont();
  }

  addContent(title: string,body: string,  imageLink: string, author: string, hashtags: string, type: string): void {
    const newData: Content = {
      id: this.content.genId(this.contentD),
      title: title,
      body: body,
      imageLink: imageLink,
      hashtags: hashtags.split(","),
      author: author,
      type: type
    };
    this.content.addContent(newData).subscribe(res =>{

      
    }
      );

  }

  getCont(){
    this.content.getContent().subscribe(content => {

      this.contentD = content;
    });
  }
}
