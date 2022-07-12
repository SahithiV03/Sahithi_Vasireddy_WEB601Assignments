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
  data;
  check = false;
  constructor(public content:ContentService, private _Activatedroute:ActivatedRoute) {

    const id=this._Activatedroute.snapshot.paramMap.get("id");
if (id) {
  this.check = true;
}
    this.getData(id);
   }

  ngOnInit(): void {
    this.getCont();
  }

  addContent(title: string,body: string,  imageLink: string, author: string, hashtags: string, type: string): void {
    const newData: Content = {
      title: title,
      body: body,
      imageLink: imageLink,
      hashtags: hashtags.split(","),
      author: author,
      type: type
    };
    if (this.check) {
    newData.id = this.data.id;

      this.content.updateContent(newData).subscribe(res =>{
        console.log('update');
        
      } );
   } else {
    newData.id = this.content.genId(this.contentD);
    this.content.addContent(newData).subscribe(res =>{
      console.log('add');

    } );
      
    }
     

  }

  getCont(){
    this.content.getContent().subscribe(content => {

      this.contentD = content;
    });
  }

  getData(id){
    this.content.getContent().subscribe(content => {

    this.content.getContentOnIdbasis(id, content).subscribe(res =>{

      this.data = res;
    })
  })
  }
}
