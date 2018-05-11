export class Article {
  public views: number = 1;
  constructor(public title: string, public teaser: string, public author: string, public body: string, public imgUrl: string) {}
}
