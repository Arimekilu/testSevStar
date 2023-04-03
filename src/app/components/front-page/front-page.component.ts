import {Component, OnInit} from '@angular/core';
import {IPostsModel} from "../../interfaces/interfaces";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  providers: [DataService]
})
export class FrontPageComponent implements OnInit {


  public posts$: Observable<IPostsModel>

  constructor(private dataService: DataService) {

  }

  public initPosts (pageNumber: number): void {
    this.posts$ = this.dataService.getData(pageNumber)
  }

  ngOnInit(): void {
   this.initPosts(1)
  }

 public reload() {
    this.dataService.reloadData()
  }
}
