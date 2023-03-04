import { Injectable } from '@angular/core';
import { signal, Signal } from './signals';

@Injectable({
  providedIn: 'root',
})
export class SigService {

signal = signal({});


  setSignal(val) {
    this.signal.set(val);
  }

  getSignal() {
    return this.signal;
  }
}
