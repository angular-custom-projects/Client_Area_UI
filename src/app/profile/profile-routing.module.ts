import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
    {
        path: '', component: ProfileComponent, children: [
            {path: '', component: ProfileDetailsComponent, pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}
