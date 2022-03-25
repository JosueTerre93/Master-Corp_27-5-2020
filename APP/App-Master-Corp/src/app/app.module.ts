import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';

import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './post/search.pipe';

// ANGULAR MATERIAL IMPORTS
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SinglePostComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
