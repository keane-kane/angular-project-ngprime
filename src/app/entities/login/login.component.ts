import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;

  password: string;
  form: any = {};
  locale: string;

  version: string;

  msgs: any[];

  constructor(
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private userContextService: UserContextService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form.username = '';
    this.form.password = '';
    this.version = environment.version;
    this.msgs = [{ severity: 'info', detail: 'UserName: admin' }, { severity: 'info', detail: 'Password: password' }];
  }

  onSubmit() {
    console.log(this.form);
      this.authService.login(this.form).subscribe(
        userData => {

          const helper = new JwtHelperService();

          // tslint:disable-next-line: no-string-literal
          const decodedToken = helper.decodeToken(userData['token']);
          const expirationDate = decodedToken.exp;
          const isExpired = decodedToken.iat;

          switch (decodedToken.roles[0]) {
            case 'ROLE_ADMIN' : {
              this.userContextService.setUser(decodedToken);
              this.routeStateService.add('Users', '/admin/users', null, true);
              break;
            }
          }
        },
        error => {
              this.toastService.addSingle('error', '', 'Invalid user.');
              console.log(error);
        });

  }



  // onSubmit(): any {
  //   this.isLoggedIn = true;

  //   this.authService.login(this.form)
  //     .subscribe(
  //       userData => {
  
  //         const helper = new JwtHelperService();

  //         // tslint:disable-next-line: no-string-literal
  //         const decodedToken = helper.decodeToken(userData['token']);
  //         const expirationDate = decodedToken.exp;
  //         const isExpired = decodedToken.iat;

  //         switch (decodedToken.roles[0]){
  //           case 'ROLE_ADMIN' : {
  //             this.routeStateService.add('Dashboard', '/main/dashboard', null, true);
  //            // this.router.navigate(['/admin']);
  //             break;
  //           }
  //           // case 'ROLE_CM' : {
  //           //   this.router.navigate(['/cm']);
  //           //   break;
  //           // }
  //           // case 'ROLE_APPRENANT' : {
  //           //   this.router.navigate(['/apprenant']);
  //           //   break;
  //           // }
  //           // case 'ROLE_FORMATEUR' : {
  //           //   this.router.navigate(['/formateur']);
  //           //   break;
  //           // }


  //         }
    // let user: User = this.userService.getUserByUserNameAndPassword(this.form.username, this.form.password);
    // if (user) {
    //   this.userContextService.setUser(user);
    //   this.routeStateService.add('Dashboard', '/main/dashboard', null, true);
    //   return;
 //   }
  //       },
  //       error => {
  //         this.toastService.addSingle('error', '', 'Invalid user.');
  //         console.log(error);
  //       });
  // }



}
