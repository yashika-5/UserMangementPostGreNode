import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { User } from '../model/user.model';

export interface UserState {
  people: User[];
}

const defaultState: UserState = {
  people: [],
};

@Injectable()
export class UserStore extends ComponentStore<UserState> {
  constructor() {
    super(defaultState);
  }

  readonly people$ = this.select(({ people }) => people);

  readonly loadPeople = this.updater((state, people: User[] | null) => ({
    ...state,
    people: people || [],
  }));
}
