import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/interfaces";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  providers: [DataService]
})
export class FrontPageComponent implements OnInit {


  posts: IPost[] = []

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(
      res => this.posts = res
    )
  }

  ngOnInit(): void {


  }

}
