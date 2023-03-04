import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SigService } from './sig.service';

@Component({
  selector: 'comp1',
  standalone: true,
  template: `
  <h1>This is comp 1 </h1>
  <br>
  Label {{val}}
  `,
})
export class Comp implements OnInit, OnChanges {
  @Input('val') signalInput;
  val;

  constructor(private sigService: SigService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.val = changes.signalInput.currentValue;
    this.sigService.setSignal(changes.signalInput.currentValue);
  }

  ngOnInit(): void {
    console.log(this.signalInput);
  }
}
