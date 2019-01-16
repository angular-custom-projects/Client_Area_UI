import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-joint',
  templateUrl: './profile-joint.component.html',
  styleUrls: ['./profile-joint.component.scss']
})
export class ProfileJointComponent implements OnInit {
  client_id_1 = 1;
  client_id_2 = 2;

  sidebarMenuItems = [
    {link: '/profile/' + this.client_id_1, title: 'Account Holder 1 Details', icon: 'person'},
    {link: '/profile/' + this.client_id_2, title: 'Account Holder 2 Details', icon: 'person'},
    {link: '/profile/verification', title: 'Verification', icon: 'verified_user'},
    // {link: '/profile/documents', title: 'Documents', icon: 'description'},
    {link: '/profile/change-password', title: 'Change Password', icon: 'lock'},
    {link: '/profile/bank-info', title: 'Your Bank Info', icon: 'account_balance'},
    {link: '/profile/agreements', title: 'Agreements', icon: 'assignment'},
  ];
  constructor() { }

  ngOnInit() {
  }

}