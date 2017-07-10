import { Directive } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEmail][ngModel]',
  providers: [
              {
            	  provide: NG_VALIDATORS,
            	  useValue: validateEmail,
            	  multi: true
	          }
	         ]
})
export class EmailValidatorDirective {}

export function validateEmail(c: FormControl) {
	  const REG_EXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
	  var valid = REG_EXP.test(c.value);
	  
	  return (!valid) ? {
		  validateEmail: { valid: false } 
	  } : null;
}