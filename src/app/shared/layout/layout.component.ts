import { Component, OnInit } from '@angular/core';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isMenuVisible: boolean;

  constructor(private menuDataService: MenuDataService,
    private applicationStateService: ApplicationStateService) {
  }

  ngOnInit() {
    const that = this;
    this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
      if (data && data != null) {
        that.isMenuVisible = !that.isMenuVisible;
      }
    });

    if (this.applicationStateService.getIsMobileResolution()) {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
  }

}
