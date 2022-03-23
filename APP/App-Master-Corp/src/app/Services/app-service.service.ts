import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Post } from '../Models/Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment } from '../Models/Comment';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Post[]>(url);
  }

  getSinglePost(id: number): Observable<Post> {
    const url = 'https://jsonplaceholder.typicode.com/posts/'+id;

    return this.http.get<Post>(url);
  }

  getComments(id: number) {
    const url = "https://jsonplaceholder.typicode.com/posts/"+id+"/comments"

    return this.http.get<Comment[]>(url);
  }
}
