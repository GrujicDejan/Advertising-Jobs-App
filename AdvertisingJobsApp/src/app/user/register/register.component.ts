import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  public username: string = '';
  public password: string = '';
  public message: string = '';

  ngOnInit(): void {
  }

  register(registerForm:any) {
    this.username = registerForm.value.username;
    this.password = registerForm.value.password;

    if (!registerForm.invalid) {
      this.userService.register(this.username, this.password).subscribe(resp=>{
        alert(resp.msg);
        this.router.navigate(['/login']);
      });
    } else {
      this.message = 'All fields must be filled';
    }
  }

}
