import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Post } from '../Models/Post';
import { AppServiceService } from '../Services/app-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post[] = [];
  //CUSTOM FILTER
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private router: Router, private appService: AppServiceService) {
    //CUSTOM FILTER
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    
  }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(){
    this.appService.getPost().subscribe(post => this.post = post);
  }

  openPost(id: number){
    this.router.navigate(['/singlepost/'+id]);
  }

  // CUSTOM FILTER
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
