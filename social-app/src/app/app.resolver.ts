import { QuestionService } from './shared/services/question.service';
import { DataService } from './shared/services/data.service';
import { UserService } from './shared/services/user.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';

@Injectable()
export class AppResolver implements Resolve<any> {
  constructor(private userService: UserService, private dataService: DataService, private questionService: QuestionService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return combineLatest([this.userService.getTopRank(), this.questionService.getAllCategories()]).pipe(tap(data => {
        this.dataService.topRank = data[0];
        this.dataService.categories = data[1];
    }));
  }
}
