import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SharedService } from 'src/app/core/services/shared.service';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';
import { User } from 'src/app/core/models/user.model';
import { PdfService } from 'src/app/core/services/pdf.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
})
export class DetailUserComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
  userform: User;
  data = [];
  error: any;

  constructor(
    private routeStateService: RouteStateService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private pdf: PdfService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedService.url = '/users';
    const id = +this.route.snapshot.params.id;

    this.sharedService.getById(id).subscribe((u) => {
      this.userform = u;
      console.log(this.userform);
    });
  }

  onDelete(id: number): void {
    this.sharedService.url = '/users?archive=false';
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.sharedService.delete(+id).subscribe(
        (res) => {
          this.ngOnInit();
        },
        (error) => (this.error = error)
      );
    }
  }

  onEdit(id: number, profil: string): any {
    this.routeStateService.add(
      'User details',
      '/admin/users/edit-user/' + id,
      profil,
      false
    );
  }

  onDetail(id: number): any {
    this.routeStateService.add(
      'User details',
      '/admin/users/detail-user/' + id,
      id,
      false
    );
  }
  back() {
    this.routeStateService.loadPrevious();
  }
  exportToPDF(): void {
    this.data.push(this.userform);
    this.pdf.getPdfData(this.data);
  }
  public convetToPDF() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 200;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.setDrawColor(255, 0, 0);
      pdf.line(35, 30, 100, 30);
      pdf.save('new-file.pdf'); // Generated PDF
    });
  }
}
