import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpClient {
  http: Http;
  constructor(http: Http) {
    this.http = http;

  }
  createAuthorizationHeader(headers: Headers) {
    let token = window.localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
  }
  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, { headers: headers});
  }
  getByParam(url, query, page, size, sort) {
    let headers = new Headers();
    let params = new URLSearchParams();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, JSON.stringify(query), { headers: headers, params: params});
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log('Data: ', data);
    return this.http.put(url, JSON.stringify(data), {
      headers: headers
    });
  }

  patch(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.patch(url, data, {
      headers: headers
    });
  }

  delete(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }

  getById(url, bidId) {
    let headers = new Headers();
    let params = new URLSearchParams();
    params.set('bidId', bidId);
    this.createAuthorizationHeader(headers);
    return this.http.get(url, { headers: headers, search: params});
  }
}