import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Briefs', Icon: 'fa-file', RouterLink: '/admin/briefs', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Rendus', Icon: 'fa-download', RouterLink: '/admin/rendus', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Explorer', Icon: 'fa-compass', RouterLink: '/admin/explorer', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Forum', Icon: 'fa-comments', RouterLink: '/admin/forum', Childs: null, IsChildVisible: false
            },
            {
                Label: 'Paramétes', Icon: 'fa-cog', RouterLink: '/admin/parametre', Childs: [

                    { Label: 'Menu Level 1.2.1', RouterLink: '/admin/parametre', Childs: null, IsChildVisible: false },
                    { Label: 'Menu Level 1.2.2', RouterLink: '/admin/parametre', Childs: null, IsChildVisible: false },
                    { Label: 'Menu Level 1.2.2', RouterLink: '/admin/parametre', Childs: null, IsChildVisible: false },
                    { Label: 'Menu Level 1.2.2', RouterLink: '/admin/parametre', Childs: null, IsChildVisible: false },
                    { Label: 'Menu Level 1.2.2', RouterLink: '/admin/parametre', Childs: null, IsChildVisible: false },
                ], IsChildVisible: false
            },
            {
                Label: 'Users', Icon: 'fa-user', RouterLink: '', Childs: [
                    { Label: 'Utilisateurs', RouterLink: '/admin/users/user-list', Childs: null, IsChildVisible: false },
                    {Label: 'Profils', RouterLink: '/admin/users/list-profil', IsChildVisible: false, Childs: null }
                ], IsChildVisible: false
            },
            {
                Label: 'Historique des promos', Icon: 'fa-history', RouterLink: '/historique', Childs: null, IsChildVisible: false
            },
        ];
    }
}
