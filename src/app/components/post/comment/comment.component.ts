import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {IPost} from "../../../interfaces/interfaces";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
// interface IPostNode {
//   name: string;
//   children?: IPostNode[];
// }

// let TREE_DATA: IPost[] = [
//
//
//   // {
//   //   name: 'Fruit',
//   //   children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
//   // },
//   // {
//   //   name: 'Vegetables',
//   //   children: [
//   //     {
//   //       name: 'Green',
//   //       children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//   //     },
//   //     {
//   //       name: 'Orange',
//   //       children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
//   //     },
//   //   ],
//   // },
// ];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  postNodeArr = []
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

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {

    console.log('const')
    // this.getTreeDataFromIPost(this.post)

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  ngOnInit(): void {
    console.log('onInit')
    this.TREE_DATA = this.post.children
    console.log(this.TREE_DATA)
    this.dataSource.data = this.TREE_DATA;
    // this.getTreeDataFromPostNodeArr(this.postNodeArr)
    // this.func(this.post)
  }

  // getTreeDataFromIPost: any = (post: IPost[] | IPost ) => {
  //   let postNode = {}
  //   for (let postKey in post) {
  //     // @ts-ignore
  //     if ((postKey === 'author' && post[postKey]) || (postKey === 'name' && post[postKey])) {
  //       // @ts-ignore
  //       postNode.name = post[postKey]
  //     }  // @ts-ignore
  //     if (postKey === 'children' && post[postKey].length != 0) {
  //       // @ts-ignore
  //       postNode.children = post[postKey]
  //     }
  //   }
  //   // @ts-ignore
  //   this.postNodeArr.push(postNode)
  //   // console.log(this.postNodeArr)
  //
  // }
  //
  // func(post: IPost) {
  //   if (post.children.length != 0) {
  //     for (let i = 0; i < post.children.length; i++) {
  //       let ditya:IPost = post.children[i]
  //       console.log()
  //       this.func(ditya)
  //     }
  //   }
  // }

  // getTreeDataFromPostNodeArr(array: IPostNode[] | object[]) {
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i])
  //     // @ts-ignore
  //     if (array[i].children.length != 0) {
  //       // @ts-ignore
  //       console.log(array[i].children)
  //       // @ts-ignore
  //       let children = array[i].children
  //       for (let i = 0; i < children; i++) {
  //         console.log(children[i])
  //         this.getTreeDataFromIPost(children[i])
  //       }
  //     }
  //
  //   }
  // }
}
