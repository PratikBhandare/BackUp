import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  constructor(private authservice:AuthService){

  }

  editForm=new FormGroup({
    name:new FormControl(""),
    img:new FormControl("")
  })

  change(){
    this.authservice.user.next(this.editForm.value.name);
  }

}
