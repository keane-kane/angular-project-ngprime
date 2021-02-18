// import { Injectable } from '@angular/core';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import { CanvasService } from './canvas.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PdfService {

//   constructor(private canvas: CanvasService) { }

//   /** Method to set PDF Title */
//   setTitle(logo: any, title: string, page: any, pageSize: string): any {
//     // let companyDetail = '';
//     let margin;
//     let fontSize;

//     if (pageSize === 'A6') {
//       margin = [15, 10, 0, 10];
//       fontSize = 8;
//     } else {
//       margin = [15, 10, 0, 10];
//       fontSize = 10;
//     }

//     return [
//       {
//         table: {
//           widths: ['35%', '65%'],
//           body: [
//             [{
//               image: logo,
//               width: 60,
//               height: 30,
//             }],
//             [{ text: title, fontSize, margin: [100, -20, 0, 0] }],
//           ],
//         },
//         layout: 'noBorders',
//       },

//     ];
//   }

//   /**  Method for creating PDF table header */
//   createTableHeader(header: string[]): any {
//     const pageHeader = { fila_0: {} };
//     header.forEach((attribute, i) => {
//       pageHeader.fila_0['col_' + (+i + 1)] = { text: attribute, style: 'tableHeader', margin: [0, 8, 0, 0] };
//     });
//     return pageHeader;
//   }

//   /** Method for creating PDF table content */
//   createBody(headers: object, records: object[]): any {
//     const body = [];
//     // tslint:disable-next-line:forin
//     for (const key in headers) {
//       const row = [];
//       // tslint:disable-next-line: forin
//       for (const headerKey in headers[key]) {
//         row.push(headers[key][headerKey]);
//       }
//       body.push(row);
//     }

//     records.forEach((record) => {
//       const row = [];
//       // tslint:disable-next-line: forin
//       for (const key in record) {
//         row.push(record[key]);
//       }
//       body.push(row);
//     });
//     return body;
//   }

//   /** Define PDF document definition */
//   // tslint:disable-next-line: max-line-length
//   getDocDefinition(title: string, logo: any, header: string[],
//     record: object[], orientation: string, columns: string[], pageSize?: string): any {

//     const page = {
//       header: title,
//       body: { header, record },
//     };
//     const body = this.createBody(this.createTableHeader(page.body.header), page.body.record);

//     let pageMargin;
//     let headerFont;
//     let contentFont;
//     if (pageSize === 'A6') {
//       pageMargin = [10, 110, 10, 55];
//       headerFont = 10;
//       contentFont = 7;
//     } else {
//       headerFont = 16;
//       contentFont = 10;
//       pageMargin = [10, 110, 10, 55];
//     }
//     const docDefinition = {
//       pageOrientation: orientation,
//       pageSize,
//       pageMargins: pageMargin,
//       header: this.setTitle(logo, title, page, pageSize),
//       footer: (currentPage, pageCount) => {
//         return { text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'center', margin: [0, 30, 0, 0] };
//       },

//       content: [
//         {
//           margin: [10, -40, 10, 10],
//           style: 'tableContent',
//           table: {
//             widths: columns,
//             headerRows: 1,
//             body,
//           },
//         },
//       ],
//       styles: {
//         header: {
//           fontSize: headerFont,
//           bold: true,
//         },
//         tableHeader: {
//           bold: true,
//         },
//         tableContent: {
//           fontSize: contentFont,
//         },
//       },
//     };
//     return docDefinition;
//   }

//   generatePdf(docDefinition): void {
//     const pdfObject = pdfMake.createPdf(docDefinition);
//     // On a browser simply use download!
//     pdfObject.download();
//   }

//   getPdfData(data: any[]): void {
//     const columns = ['40%', '15%', '45%'];
//     const header = ['Prenom', 'Nom', 'Email'];


//     const title = 'Student Information';
//     // tslint:disable-next-line: max-line-length
//     this.canvas.getBase64Image('../assets/images/loginPage.png')
//       .then(base64Img => {
//         const logo = base64Img;
//         this.generatePdf(this.getDocDefinition(title, logo, header, this.mapData(data), 'portrait', columns, 'A4'));
//       });

//   }

//   // tslint:disable-next-line: typedef
//   mapData(data: any[]): any {
//     return data.map((item) => {
//       return {
//         Prenom: item.prenom,
//         Nom: item.nom,
//         Email: item.email
//       };
//     });
//   }
// }



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  // Convert image url in assets to b64
  getBase64Image(url: string): Promise<any> {
    return new Promise((resolve) => {
      const image = new Image();
      const outputFormat = 'image/png';
      image.crossOrigin = 'Anonymous';
      image.onload = () => {
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS');
        // let canvas = document.createElement('CANVAS') as HTMLCanvasElement;
        const context = canvas.getContext('2d');
        let dataURL;
        canvas.height = image.height;
        canvas.width = image.width;
        context.drawImage(image, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        canvas = null;
        resolve(dataURL);
      };
      image.src = url;
    });
  }
}
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
  
@Component({  
  selector: 'app-htmltopdf',  
  templateUrl: './htmltopdf.component.html',  
  styleUrls: ['./htmltopdf.component.css']  
})  
export class HtmltopdfComponent{  
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  
}  

new JsPDF(  
  Orientation, // Landscape or Portrait  

  unit, // mm, cm, in  

  format // A2, A4 etc  
); 

const data = [{
  nom: this.userForm.get('nom').value,
  prenom: this.userForm.get('prenom').value,
  email: this.userForm.get('email').value,
  username: this.userForm.get('username').value,
  profil: this.userForm.get('profil').value,
  phone: this.userForm.get('phone').value,
  avatar: this.userForm.get('avatar').value,
}];
const formdata = new FormData();
for(let i = 0; i < data.length; i += 1) {
     Object.keys(data[i]).forEach(key => {
          if(key == 'avatar')
            {
                formdata.append(key, JSON.stringify(data[i][key]));
            } else {
             formdata.append(key, data[i][key]);
          }

       });
 }
