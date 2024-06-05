import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DirtyFormService {
  private _formDirty: boolean = false;


  constructor() { }

  get formDirty(): boolean {
    return this._formDirty;
  }

  setFormDirty(form: FormGroup) {
    this._formDirty = form.dirty;
  }

  clearFormDirty() {
    this._formDirty = false;
  } 

}
