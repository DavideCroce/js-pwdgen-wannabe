console.log ('JS OK')

/*

1 - Chiedere Nome

2 - Chiedere Cognome 

3 - Chiedere Colore Preferito

4 - Far uscire fuori la password formata da nome, cognome. colore preferito + il numero 21

*/


/* Ask the Name */

const userName = prompt ('Qual è il tuo nome?');
console.log (userName);

/* Ask the SurName */

const userSurname = prompt ('Qual è il tuo cognome?');
console.log (userSurname);

/* Ask the Favourite Color */

const FavColor = prompt ('Qual è il tuo colore preferito?');
console.log (FavColor);

/* Re-Take the Element */

const resultElement = document.getElementById ('password');

/* Result to the Password */

resultElement.innerText = 'La tua password è:' + userName + userSurname + FavColor + '21';
