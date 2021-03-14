import { CounterComponent } from './counter.component';
import {FormBuilder} from '@angular/forms';

describe('CounterComponent', () => {
let component: CounterComponent;

beforeEach(() => {
  component = new CounterComponent(new FormBuilder());
});


  // xit - прорустить тест
  // beforeEach - для каждого it
  // beforeAll - перед всеми it
  // afterEach - после завершения каждого it
  // afterAll - после завершения всех тестов


it('should increment counter +1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

it('should decrement counter -1', () => {
  component.decrement();
  expect(component.counter).toBe(-1);
});

it('should increment value by event emitter', () => {
  let result = null;
  component.counterEmitter.subscribe(value => result = value);
  component.increment();
  // @ts-ignore
  expect(result).toBe(1);
});
it('should create form with 2 controls', ()=>{
  expect(component.form.contains('login')).toBeTruthy();
  expect(component.form.contains('email')).toBe(true);
// toBeTruthy() аналог toBe(true)
  });
it('should mark control login as invalid if empty value', ()=>{
  const control = component.form.get('login');
  // @ts-ignore
  control.setValue('');
  // @ts-ignore
  expect(control.valid).toBeFalsy()
})
});

