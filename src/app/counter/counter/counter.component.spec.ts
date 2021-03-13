import { CounterComponent } from './counter.component';

describe('CounterComponent', ()=>{
let component: CounterComponent
beforeEach(()=>{
  component = new CounterComponent();
})


  // xit - прорустить тест
  //deforeEach - для каждого it
  //beforeAll - перед всеми it
  //afterEach - после завершения каждого it
  //afterAll - после завершения всех тестов


  it('should increment counter +1', ()=>{
    component.increment();
    expect(component.counter).toBe(1)
  });

it('should decrement counter -1', ()=>{
  component.decrement();
  expect(component.counter).toBe(-1)
})
})

