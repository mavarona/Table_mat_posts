
// Components
import { AppComponent } from './app.component';
import { DialogCommentsComponent } from './posts/dialog-comments/dialog-comments.component';
import { PostsComponent } from './posts/posts.component';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

// Services
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DialogCommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DialogCommentsComponent ]
})
export class AppModule { }
