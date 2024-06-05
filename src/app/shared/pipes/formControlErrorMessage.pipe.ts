import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'appFormControlErrorMessage',
  standalone: true,
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(errors: any): string {
    if (errors) {
      if(errors.required) {
        return 'Bu alan zorunludur.';
       } else if (errors.minlength) {
         return `Minimum ${errors.minlength.requiredLength} karakter girmelisiniz.`;
       } else if (errors.maxLength) {
         return `Maximum ${errors.maxlength.requiredLength} karakter girebilirsiniz.`;
       }
    }
    return "";
  }

}
