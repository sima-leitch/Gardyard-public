import { Injectable } from '@angular/core';
import { Contacts } from 'src/app/interfaces';
import { ApiService } from 'src/app/classes';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ContactsService extends ApiService < Contacts > {
    constructor(protected http: HttpClient) {
        super(http);
        this.apiRoute = 'api/contacts/';
    }
}
