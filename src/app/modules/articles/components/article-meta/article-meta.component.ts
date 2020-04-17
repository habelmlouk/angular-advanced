import { Component, Input } from '@angular/core';
import { Article } from '../../services/article.model';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.scss']
})
export class ArticleMetaComponent {
  @Input() article: Article;
}
