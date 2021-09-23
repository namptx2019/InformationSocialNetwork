import { Category } from './../models/category.model';
import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable()
export class DataService {
  public user: User;
  public topRank: User[];
  public categories: Category[];
  public isLogin = false;
  public isAdmin = false;
}
