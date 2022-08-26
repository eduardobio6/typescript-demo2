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
let notSure: any = 4;
notSure = 'Maybe I am a String';
notSure = false; //okey, definitelu a boolean

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>Any Variable</h1>
<h2>O meu valor é: ${notSure}</h2>
`;
