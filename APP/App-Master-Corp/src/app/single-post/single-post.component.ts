import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../Models/Comment';
import { Post } from '../Models/Post';
import { AppServiceService } from '../Services/app-service.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  idPost: number;
  post: Post;
  comment: Comment[];

  constructor(
    private router: Router,
    private r: ActivatedRoute,
    private appService: AppServiceService
  ) {}

  ngOnInit(): void {
    this.idPost = Number(this.r.snapshot.paramMap.get('id'));
    console.log('ID POST: ' + this.idPost);
    this.loadPost(this.idPost);
  }

  dashboard() {
    this.router.navigate(['/posts']);
  }

  loadPost(id: number) {
    // OBTENER DATOS DEL POST
    this.appService.getSinglePost(id).subscribe((post) => (this.post = post));

    // CARGAR COMENTARIOS
    this.appService.getComments(id).subscribe((comment) => (this.comment = comment));
  }

  viewPost() {
    console.log(this.post);
    console.log(this.comment);
  }
}
