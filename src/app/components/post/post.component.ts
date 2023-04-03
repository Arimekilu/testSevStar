import {Component, OnInit} from '@angular/core';
import {IPostModel} from "../../interfaces/interfaces";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  public post$: Observable<IPostModel>

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.post$ = of(this.route.snapshot.paramMap.get('id')).pipe(
      switchMap((id: string | null) => this.dataService.getPostModel(id))
    )
  }


}
