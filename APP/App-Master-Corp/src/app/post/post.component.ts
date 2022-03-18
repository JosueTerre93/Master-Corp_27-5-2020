import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../Models/Post';
import { AppServiceService } from '../Services/app-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post[] = [];

  constructor(private router: Router, private appService: AppServiceService) {}

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(){
    this.appService.getPost().subscribe(post => this.post = post);
  }

  openPost(id: number){
    this.router.navigate(['/singlepost/'+id]);
  }
}
