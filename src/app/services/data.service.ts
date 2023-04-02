import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../interfaces/interfaces";
import {combineLatest, Observable} from "rxjs";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  getDataById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`http://hn.algolia.com/api/v1/items/${id}`)
  }

  public getData(): Observable<IPost[]> {
    return combineLatest(new Array(20).fill(1).map(
      (num: unknown, idx: number) => this.getDataById(idx + 1)
    ))
  }


}
