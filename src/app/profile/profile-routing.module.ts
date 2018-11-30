import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProfileDetailsComponent} from "./profile-details/profile-details.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileJointComponent} from "./profile-joint/profile-joint.component";
import {ProfileJointDetailsComponent} from "./profile-joint-details/profile-joint-details.component";
const account_type: string = 'j';
let routes: Routes = [];
let profile_id = 1;
switch (account_type) {
    case 'j': {
        routes = [
            {
                path: '', component: ProfileJointComponent, children: [
                {path: ':profile_id', component: ProfileJointDetailsComponent, pathMatch: 'full'}
            ],

            }
        ];
        break;
    }
    case 'c': {
        routes = [
            {
                path: '', component: ProfileComponent, children: [
                {path: '', component: ProfileDetailsComponent, pathMatch: 'full'}
            ],

            }
        ];
        break;
    }
    default: {
        routes = [
            {
                path: '', component: ProfileComponent, children: [
                {path: '', component: ProfileDetailsComponent, pathMatch: 'full'}
            ],

            }
        ];
        break;
    }
}


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}
