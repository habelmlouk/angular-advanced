import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import { RootComponent } from './containers/root/root.component';
import { ArticlesModule } from './modules/articles/articles.module';
import { AuthModule } from './modules/auth/auth.module';

export const routes: Routes = [
  {
    path: 'articles',
    loadChildren: './modules/articles/articles.module#ArticlesModule'
  },
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', redirectTo: 'notFound' }
];

@NgModule({
  declarations: [RootComponent, HeaderComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ArticlesModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
