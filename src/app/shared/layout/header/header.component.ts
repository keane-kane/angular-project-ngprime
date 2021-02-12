import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/core/models/user.model';
import { notification } from 'src/app/core/models/notification.model';
import { UserIdleService } from 'angular-user-idle';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { MenuDataService } from 'src/app/core/services/menu-data.service';

interface Cohort {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

  selectedCohort: Cohort[];
  cohort: Cohort[];
  user: User;

  displayNotifications: boolean;

  notifications: notification[];

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private themeService: ThemeService,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService) {

    this.displayNotifications = false;
    this.cohort = [
      {name: 'SA COHORTE 1'},
      {name: 'SA COHORTE 2'},
      {name: 'SA COHORTE 3'},
  ];
  }

  ngOnInit() {
    this.user = this.sessionService.getItem('currentUser');
    this.notifications = [];
    for (let i = 1; i <= 5; i++) {
      const notificationObj = new notification('Message ' + i, new Date(), null);
      this.notifications.push(notificationObj);
    }

    // Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.userContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }



}
