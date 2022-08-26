// Import stylesheets
import './style.css';

//Exemplo array
/*let List: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app.text');
//Exemplo de string template
appDiv.innerHTML = `
<h1>Array Declaration</h1>
<h2> ${List}</h2>
<h2> other list: ${otherList}</h2>
`;*/

//Conceito de TUPLA
/*let me: [string, number];

me = ['Carlos Eduardo', 25];

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1> Tuple</h1>
<h2>Me chamo ${me[0]} e tenho ${me[1]} anos</h2> 
`;*/

//Exemplo do uso do ENUM
/*enum Color {
  Red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1> Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2 : ${color2}</h2>
`;*/

//exemplo do tipo ANY
/*let notSure: any = 4;
notSure = 'Maybe I am a String';
notSure = false; //okey, definitelu a boolean

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>Any Variable</h1>
<h2>O meu valor é: ${notSure}</h2>
`;*/

//Exemplo do tipo VOID
/*function warnUSer(): void {
  console.log('This is my warning message');
}

let myFunction: void = warnUSer();

let unusable: void = undefined;
unusable = null;

myFunction;

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>VOID</h1>
<h2>unusable: ${unusable}</h2>
<h2>myFunction: ${myFunction}</h2>
`;*/

//Exemplo do que nao fazer
/*declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
//create(42);
//create("string");
//create("false");
create(undefined);

//Meramente ilustrativo
/*const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>Object</h1>
`;*/

//Exemplo de Type Assertions
/*let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

let someValue2: any = 'this is a string';
let strLength2: number = (someValue2 as string).length;
*/

//Meramente ilustrativo
/*const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>Type Assertion</h1>
`;*/

//Mais Functions
/*function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function fullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + ' ' + pessoa.lastname;
}

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>Functions</h1>
<h2>Soma de 2 e 3: ${sum(2, 3)}</h2>
<h2>Soma de 11 e 329: ${sum(11, 329)}</h2>
<h2>Meu nome completo é: ${fullName({
  lastname: 'A. De Oliveira',
  name: 'Carlos E.',
})}</h2>
`;*/

//Alertando usando function/btn
/*let title: string = 'Olá, mundo!!';
let paragraph: string = 'blábláblá...';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = 'Contador: ' + counter;
}, 1000);

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando em TypeScript');
}

const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;*/

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('MyApp');

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>Classes</h1>
<h2>${greeter.greet()}!</h2>
`;
