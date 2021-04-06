import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    user = null;

    constructor(
        private userService: UserService,
    ) { }

    ngOnInit(): void {
        this.userService.loadUserData()
            .subscribe(data => {
                this.user = data.results[0];
            });
    }

}
