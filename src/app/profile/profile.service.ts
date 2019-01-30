import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    envURL = environment.apiURL;

    // will be used to emit the directors
    directorsChanged = new Subject();
    // directors URL
    directorsListURL = environment.directorsURL;
    // will be used to emit the share holders
    shareHoldersChanged = new Subject();
    // share holders URL
    shareHoldersListURL = environment.shareHoldersURL;

    constructor(private http: HttpClient) {
    }

    getClientInfo() {
        return this.http.get<any>(this.envURL + `clients`);
    }

    updateClientInfo(clientData) {
        return this.http.put<any>(this.envURL + 'clients', clientData);
    }

    getDirectors() {
        // get a list of all directors
        this.http.get(this.directorsListURL).subscribe(
            data => {
                // emit any changes to the directors array
                this.directorsChanged.next(data['directorsList']);
            }
        );
    }

    getShareHolders() {
        // get a list of all share holders
        this.http.get(this.shareHoldersListURL).subscribe(
            data => {
                // emit any changes to the share holders array
                this.shareHoldersChanged.next(data['shareHoldersList']);
            }
        );
    }

    updateBankInfo(bankData) {
        return this.http.put<any>(this.envURL + 'clients/bank-info', bankData);
    }
}
