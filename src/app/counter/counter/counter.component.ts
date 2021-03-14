import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-counter',
template: `Counter {{counter}}`
})
export class CounterComponent {
counter = 0 ;
public form: FormGroup;

constructor(private formBuilder: FormBuilder) {
  this.form = formBuilder.group({
    login: ['', Validators.required],
    email: ['']
  });
}

@Output() counterEmitter = new EventEmitter<number>();

// tslint:disable-next-line:typedef
increment(){
  this.counter ++;
  this.counterEmitter.emit(this.counter);
}
decrement(){
  this.counter --;
}
}
