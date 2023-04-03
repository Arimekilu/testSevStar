import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {IPost} from "../../../interfaces/interfaces";


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  TREE_DATA: IPost[]

  @Input() post: IPost

  private _transformer = (node: IPost, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.author,
      text: node.text,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  // @ts-ignore
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    console.log('onInit')
    this.TREE_DATA = this.post.children
    console.log(this.TREE_DATA)
    this.dataSource.data = this.TREE_DATA;
  }

}
