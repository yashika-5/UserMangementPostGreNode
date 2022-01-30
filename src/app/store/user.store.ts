import { Injectable, OnDestroy } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';
import { User } from '../model/user.model';

export interface UserState {
  people: User[];
  editorId: number | undefined;
  editedUser: User | undefined;
}

const defaultState: UserState = {
  people: [], 
  editorId: undefined,
  editedUser: undefined
};

@Injectable()
export class UserStore 
extends ComponentStore<UserState> 
implements OnDestroy {
  constructor() {
    super(defaultState);
  }
  // selectors
  readonly people$ = this.select(({ people }) => people);
  readonly editorId$ = this.select(({ editorId }) => editorId);
  readonly editedUser$ = this.select(({ editedUser }) => editedUser).pipe(
    tap((user) => console.log('editedUser$', user))
  );

  // updaters
  readonly loadPeople = this.updater((state, people: User[] | null) => ({
    ...state,
    people: people || [],
  }));

  readonly setEditorId = this.updater(
    (state, editorId: number | undefined) => ({ ...state, editorId })
  );

  readonly setEditedUser = this.updater(
    (state, editedUser: User | undefined) => ({ ...state, editedUser })
  );

  // effects
  readonly editUser = this.effect(
    (userId$: Observable<number | undefined>) =>
      userId$.pipe(
        withLatestFrom(this.people$),
        tap<[number | undefined, User[]]>(([id, people]) => {
          this.setEditorId(id);

          const userToEdit =
            !id && id !== 0
              ? undefined
              : people.find((user) => user.id === id);
          console.log(userToEdit)
          this.setEditedUser({ ...userToEdit });
        })
      )
  );


  ngOnDestroy() {
  }
}
