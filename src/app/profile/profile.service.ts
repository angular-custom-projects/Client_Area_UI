import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ClientDetails} from '../models/client-details';
import {convertSchemaToOptions} from '@angular/cli/models/json-schema';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    envURL = environment.apiURL;

    constructor(private http: HttpClient) {
    }

    getClientInfo() {
        return this.http.get<any>(this.envURL + `clients`);
    }

    updateClientInfo(clientData) {
        return this.http.put<any>(this.envURL + 'clients', clientData);
    }
}
