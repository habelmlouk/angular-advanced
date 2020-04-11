import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { RootComponent } from './containers/root/root.component';
import { ArticlesModule } from './modules/articles/articles.module';

@NgModule({
  declarations: [RootComponent, HeaderComponent],
  imports: [BrowserModule, ArticlesModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
