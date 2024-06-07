import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSharedService } from '../../core/services/user-shared.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userSharedService: UserSharedService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userSharedService.getUser(id).subscribe(data => {
      this.user = data;
      this.isLoading = false;
    });
  }

  onSave(): void {
    this.userSharedService.updateUser(this.user).subscribe(() => {
      
    });
  }
}
