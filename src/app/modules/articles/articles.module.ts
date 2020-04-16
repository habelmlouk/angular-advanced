import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicLabelDirective } from 'src/app/dynamic-label.directive';
import { FibonacciPipe } from 'src/app/fibonacci.pipe';

import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleItemVotesComponent } from './components/article-item-votes/article-item-votes.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleMetaComponent } from './components/article-meta/article-meta.component';
import { ArticlesComponent } from './containers/articles/articles.component';
import { ArticlesService } from './services/articles.service';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'articles', component: ArticlesComponent }
];
@NgModule({
  declarations: [
    ArticleFormComponent,
    ArticleItemComponent,
    ArticleItemVotesComponent,
    ArticlesComponent,
    ArticleMetaComponent,
    FibonacciPipe,
    DynamicLabelDirective
  ],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [ArticlesComponent],
  providers: [ArticlesService]
})
export class ArticlesModule {}
