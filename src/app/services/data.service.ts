import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost, IPostModel, IPostsModel} from "../interfaces/interfaces";
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  map,
  Observable,
  of,
  startWith,
  switchMap,
} from "rxjs";


@Injectable()
export class DataService {
  private postsByPageNumber: number = 5
  private reload$: BehaviorSubject<null> = new BehaviorSubject(null)
  private reloadPost$: BehaviorSubject<null> = new BehaviorSubject(null)

  constructor(private http: HttpClient) {
  }

  private getPostById(id: string | number): Observable<IPost> {
    return this.http.get<IPost>(`http://hn.algolia.com/api/v1/items/${id}`)
  }

  public getPostModel(id: string | number | null): Observable<IPostModel> {
    if (!id) {
      return of({state: 'ready'})
    }
    return this.reloadPost$.pipe(
      switchMap(() => this.getPostById(id).pipe(
        map((item: IPost) => ({state: "ready", item} as IPostModel)),
        catchError(
          (err: unknown) => {
            console.log(err);
            return of<IPostModel>({state: 'error'})
          }
        ),
        startWith<IPostModel>({state: 'pending'})
      ))
    )
  }

  public getData(pageNumber: number): Observable<IPostsModel> {
    return this.reload$.pipe(
      switchMap(
        () => combineLatest(new Array(this.postsByPageNumber).fill(1).map(
          (num: unknown, idx: number) => this.getPostById((pageNumber - 1) * this.postsByPageNumber + idx + 1)
        )).pipe(
          map((items: IPost[]) => ({state: 'ready', items} as IPostsModel)),
          catchError(
            (err: unknown) => {
              console.log(err);
              return of<IPostsModel>({state: 'error'})
            }
          ),
          startWith<IPostsModel>({state: 'pending'})
        )
      )
    )
  }

  public reloadData(): void {
    this.reload$.next(null)
  }

}
