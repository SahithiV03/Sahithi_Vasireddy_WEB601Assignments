import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { content } from './data/mockContent';
import { Content } from './models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {



  // getContent(): Observable<Content[]>{
  //   const contents = of(content);
  //   return contents;
  // }



  getContentOnIdbasis(id, content): Observable<Content> {
    for (let index = 0; index < content.length; index++) {
      const element = content[index];
      if (element.id == id) {
        return of(element);
      }
    }
    return of({
      id: -1, title: '', author: '',
      type: '', hashtags: []
    });
  }

  //     addContent(newContentItem: Content): Observable<Content[]>{
  //       content.push(newContentItem);
  // return of(content);
  // }

  // updateContent(contentItem: Content): Observable<Content[]>{
  //   for (let index = 0; index < content.length; index++) {
  //     const element = content[index];
  //     if (element.id == contentItem.id) {
  //       content[index] = contentItem;
  //       return of(content);
  //     }
  //   }
  //   }

  // deleteContent(id: number): Observable<Content> {
  //   let item;
  //   for (let index = 0; index < content.length; index++) {
  //     const element = content[index];
  //     if (element.id == id) {
  //       item = content[index];
  //       content.splice(index, 1);
  //       return of(item);
  //     }
  //   }
  // }


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  // getContent(): Observable<Content[]>{
  //   const contents = of(content);
  //   this.messageService.add('ContentService: fetched Content: Content array loaded!');
  //   return contents;
  // }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content> {

    return this.http.post<Content>("api/content", newContentItem);
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put("api/content"
      , contentItem,
      this.httpOptions);
  }


  genId(content: Content[]): number {
    return content.length > 0 ?
    Math.max(...content.map(c => c.id)) + 1 : 2000;
    }

}
