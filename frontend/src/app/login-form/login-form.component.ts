import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';
import { LoginDTO } from 'src/DTO/LoginDTO';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
    @Output() public onChangeFormClick = new EventEmitter<any>();

    constructor(private userService: UserService, private router: Router) {}

    userLogin: LoginDTO = {
        email: '',
        password: '',
    };

    onLogin() {
        this.userService.login(this.userLogin).subscribe({
            next: (res : any) => {
                sessionStorage.setItem("jwtSession", res.body.jwt)

                // if (res.status == 200) this.router.navigate(['/home']);
            },
            error: (error) => {
                console.log(error)
            },
        });
    }

    onSwitch() {
        this.onChangeFormClick.emit(true);
    }
}
