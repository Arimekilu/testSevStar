import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/interfaces";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [DataService]
})
export class PostComponent implements OnInit {

  // @Input() post: IPost

  post: IPost

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.getMyPost()
  }

  ngOnInit(): void {

  }

  getMyPost() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id)
      this.dataService.getDataById(+id).subscribe(
        res => {
          this.post = res
        }
      )
  }

}
