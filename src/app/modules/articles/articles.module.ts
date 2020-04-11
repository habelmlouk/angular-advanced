import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FibonacciPipe } from 'src/app/fibonacci.pipe';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemVotesComponent } from './components/article-item-votes/article-item-votes.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesComponent } from './containers/articles/articles.component';
import { ArticlesService } from './services/articles.service';

@NgModule({
  declarations: [
    ArticleFormComponent,
    ArticleItemComponent,
    ArticleItemVotesComponent,
    ArticlesComponent,
    FibonacciPipe
  ],
  imports: [CommonModule, FormsModule],
  exports: [ArticlesComponent],
  providers: [ArticlesService]
})
export class ArticlesModule {}
