import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post[] = [
    
      {
        userId: 1,
        id: 1,
        title: "Title 1",
        body: "Proident veniam elit nisi labore irure labore velit id culpa cupidatat nulla magna laboris incididunt. Consectetur nulla ullamco nulla laborum. Labore nulla irure esse nisi ut. Esse occaecat est magna duis proident enim. Ullamco culpa et enim officia duis qui elit eiusmod. Officia consequat in do consectetur pariatur non dolore cupidatat sunt cupidatat ex eu labore elit. Dolor incididunt amet aliquip consequat incididunt eiusmod amet ullamco adipisicing."
        },
        {
        userId: 1,
        id: 2,
        title: "Title 2",
        body: "In id sint enim mollit ut elit velit eiusmod consequat sit. Ea commodo culpa non ipsum laborum. Dolor adipisicing veniam labore aliquip exercitation magna officia ex sint aliqua irure mollit. Sint do laboris minim excepteur cillum et in ex enim anim velit cupidatat est Lorem."
        }
  ];

  constructor() {}

  ngOnInit(): void {

  }
}
