import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {HttpClientModule} from "@angular/common/http";
import {FrontPageComponent} from './components/front-page/front-page.component';
import {PostComponent} from './components/post/post.component';
import {MatSliderModule} from "@angular/material/slider";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CommentComponent } from './components/post/comment/comment.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {DataService} from "./services/data.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FrontPageComponent,
    PostComponent,
    CommentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatSliderModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatTreeModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ],
  providers: [HttpClientModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
