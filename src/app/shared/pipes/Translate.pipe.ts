import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {


  constructor(private translateService: TranslateService) {}

  transform(value: string, targetLanguage: string): string {
    let translatedText = value;

    this.translateService.use(targetLanguage);
    this.translateService.get(value).subscribe((res: string) => {
      translatedText = res;
    });

    return translatedText;
  }

}
