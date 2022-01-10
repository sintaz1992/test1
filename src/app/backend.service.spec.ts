import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { BackendService } from './backend.service';
import { Component } from '@angular/core';

describe('BackendService', () => {
  let service: BackendService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(BackendService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get from server and parse result', () => {
    service.name = 'myListName';
    service.backendUrl = '/mock/';

    service
      .getRemoteList('myListName')
      .subscribe((data) =>
        expect(data).toEqual({ name: 'myListName', todos: [], dones: [] })
      );
    const req = httpTestingController.expectOne('/mock/myListName');
    expect(req.request.method).toEqual('GET');
    req.flush({ fields: { name: { stringValue: 'myListName' } } });

    httpTestingController.verify();
  });

  it('should save to server', () => {
    service.name = 'myListName';
    service.backendUrl = '/mock/';

    service
      .save({ name: 'myListName', todos: [], dones: [] })
      .subscribe((data) => expect(data).toEqual({ status: 'success' }));
    const req = httpTestingController.expectOne('/mock/myListName');
    expect(req.request.method).toEqual('PATCH');
    req.flush({ status: 'success' });

    httpTestingController.verify();
  });
});
