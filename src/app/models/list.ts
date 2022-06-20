import { Content } from "./content";

export class List {
    
    private contentArr:Content[];

    constructor(){
        this.contentArr = [];
    }

    get contentData():Content[]{
        return this.contentArr;
    }

    addContentItem(item:Content){
        this.contentArr.push(item);
    }

    countItems():Number{
        return this.contentArr.length;
    }

    showContentDetails(idx:Number): Content {
        for(let i =0;i<this.contentArr.length;i++){
            if(this.contentArr[i].id==idx){
                return this.contentArr[i];
            }

        }
        return {  id: 0,
            title: '',
            author: '',
            type:''};
  }
}
