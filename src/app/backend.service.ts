import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from './types';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  backendUrl =
    'https://firestore.googleapis.com/v1/projects/hazu-playground/databases/(default)/documents/todos/';

  name = '';
  constructor(private client: HttpClient) {}

  getRemoteList(name: string) {
    try {
      return this.client
        .get<any>(`${this.backendUrl}${name}`, {
          responseType: 'json',
        })
        .pipe(
          map((x) => {
            const todos = x.fields.todos.arrayValue.values?.map(
              (x: any) => x.stringValue
            );
           todos.includes('')? todos.splice(todos.indexOf(''),1):{}
            const dones = x.fields.dones.arrayValue.values?.map(
              (x: any) => x.stringValue
            );
            dones.includes('')? dones.splice(dones.indexOf(''),1):{}

            return { name: this.name, todos, dones };
          }),
          catchError((err) =>
           of({ name: this.name, todos: [], dones: [] }))
        );
    }
     catch (_) {
      return of({ name: this.name, todos: [], dones: [] });
    }
  }

  save(list: List) {
    return this.client.patch<{ status: string }>(
      `${this.backendUrl}${this.name}`,
      {
        fields: {
          todos: {
            arrayValue: {
              values: (list.todos && list.todos.length>0)? list.todos.map((x) => {
                return { stringValue: x };
              }):[{stringValue:''}],
            },
          },
          dones: {
            arrayValue: {
              values: (list.dones && list.dones.length>0)? list.dones.map((x) => {
                return { stringValue: x };
              }):[{stringValue:''}],
            },
          },
        },
      },
      {
        responseType: 'json',
      }
    );
  }
}
