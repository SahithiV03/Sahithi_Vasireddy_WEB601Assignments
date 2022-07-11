import { Injectable } from '@angular/core';
import { content } from '../data/mockContent';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const mockContent : Content[] = content;
    return {mockContent};
    }s

}
