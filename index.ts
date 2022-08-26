// Import stylesheets
import './style.css';

let List: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app.text');
//Exemplo de string template
appDiv.innerHTML = `
<h1>Array Declaration</h1>
<h2> ${List}</h2>
<h2> other list: ${otherList}</h2>
`;
