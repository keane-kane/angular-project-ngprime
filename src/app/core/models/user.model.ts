export class User {
    constructor() {
        this.userId = null;
        this.username = null;
        this.password = null;
        this.emailId = null;
        this.birthDate = null;
    }

    userId: number;
    username: string;
    password: string;
    emailId: string;
    birthDate: Date;
}
// export abstract class User {
//     protected id: number;
//     protected username: string;
//     protected password: string;
//     protected email: string;
//     protected nom: string;
//     protected prenom: string;
//     protected avatar: Blob;
//     protected archive: boolean;
//     protected address?: string;

//     constructor(user: User){
//       this.id        = user.id;
//       this.username  = user.username;
//       this.password  = user.password;
//       this.email     = user.email;
//       this.nom = user.nom;
//       this.prenom  = user.prenom;
//       this.avatar     = user.avatar;
//       this.archive   = user.archive;
//       this.address   = user.address;
//      }

//   }
