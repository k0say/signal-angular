import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { signal } from './signals/signal';
import { computed } from './signals/computed';
import { effect } from './signals/effect';
import { TestArraysCmp } from './testing-arrays.component';
import { TestObjectsCmp } from './testing-objects.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Comp } from './comp1.component';
import { SigService } from './sig.service';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'my-app',
  standalone: true,
  template: `
    <comp1 [val]="range"></comp1>
    <hr>
    RECEIVER FROM SERVICE: {{receiver()}}
    <br>
    <input type="text" [ngModel]="range" (ngModelChange)="valChange($event)"/>
    <p>Value: {{ range }}</p>
    
    <br>

  `,
  imports: [TestArraysCmp, TestObjectsCmp, FormsModule, Comp],
})
export class App implements OnInit {
  receiver = signal({});

  range: any;

  constructor(private sigService: SigService) {
    effect(() => {});
  }
  ngOnInit(): void {
    this.receiver = this.sigService.getSignal();
  }

  valChange(event) {
    this.range = event;
    console.log(event);
  }
}

bootstrapApplication(App);
