import { Article } from "./article.model";

export class ArticlesService {
  private articles = [
    new Article("Angular 5", "http://angular.io", 3, 5),
    new Article("Javascript", "http://eloquentjavascript.net", 7, 16),
    new Article("Typescript", "https://www.typescriptlang.org", 2, 20),
  ];

  minMinutes: number = 1;
  maxMinutes: number = 30;

  public getArticles(): Article[] {
    return this.articles;
  }

  public add(title: string, href: string): void {
    // immutable add
    const article = new Article(title, href, this.getRandomMinutes());
    this.articles = [...this.articles, article];
  }

  public remove(item: Article): void {
    // immutable remove : article reference is so far unique because of immutability. Better search would be on article ID
    this.articles = this.articles.filter((article) => article !== item);
  }

  public upvoteAll(): void {
    // immutable deep change of vote
    this.articles = this.articles.map((article) => article.changeVote(1));
  }

  public upvote(item: Article): void {
    this.articles = this.articles.map((article) => {
      if (article === item) {
        return article.changeVote(1); // change only affected item
      }
      return article; // no change
    });
  }

  public downvote(item: Article): void {
    this.articles = this.articles.map((article) => {
      if (article === item) {
        return article.changeVote(-1); // change only affected item
      }
      return article; // no change
    });
  }

  private getRandomMinutes(): number {
    return (
      Math.floor(Math.random() * (this.maxMinutes - this.minMinutes + 1)) +
      this.minMinutes
    );
  }
}
