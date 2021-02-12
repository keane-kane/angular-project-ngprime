import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angualr Project';
  showLoader: boolean;

  constructor(private loaderService: LoaderService
    ) { }

  ngOnInit(): void {
    this.loaderService.status.subscribe((val: boolean) => {

      this.showLoader = val;
    });
  }

  ngOnDestroy(): void {
    this.loaderService.status.observers.forEach(function (element) { element.complete(); });
  }
}
