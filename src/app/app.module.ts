import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./components/header/header.component";
import { ArticlesModule } from "./modules/articles/articles.module";
import { RootComponent } from "./containers/root/root.component";

@NgModule({
  declarations: [RootComponent, HeaderComponent],
  imports: [BrowserModule, ArticlesModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
