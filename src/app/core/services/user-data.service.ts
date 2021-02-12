import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Injectable({
    providedIn: 'root',
})
/**
 * user service class
 */
export class UserDataService {

    users: User[] = [];

    constructor() {
        const user = {
            userId: 1, username: 'admin', password: 'password', emailId: 'admin@admin.com', birthDate: new Date('10/28/1992')
        };
        this.users.push(user);
    }

    /**
     * get user by user name and password
     * @param username
     * @param password
     */
    getUserByUserNameAndPassword(username: string, password: string): User {
        let user: User = null;
        this.users.forEach(element => {
            if (element.username === username && element.password === password) {
                user = element;
            }
        });
        return user;
    }

    /**
     * add new user
     * @param userName
     * @param password
     * @param emailId
     * @param birthDate
     */
    addUser(userName: string, password: string, emailId: string, birthDate: Date): boolean {
        let userId = this.users.length + 1;
        let user = new User();
        user.userId = userId;
        user.username = userName;
        user.password = password;
        user.emailId = emailId;
        user.birthDate = birthDate;
        this.users.push(user);
        return true;
    }
}