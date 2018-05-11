import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { ViewArticleComponent } from './view-article/view-article.component';
@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    ViewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
