import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {


  constructor(private sanitizer:DomSanitizer) {}

  transform(value: string, city: string): any {

    // return '<b>' + city + '<b>'
    return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color: #ffffcc">' + city + '</div>') 
    


  }

}
 