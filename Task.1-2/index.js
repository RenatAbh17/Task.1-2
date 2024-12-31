// JavaScript-код с созданием переменных

/* Автор:
RenatAbh-17
*/

let myName = 'Renat';
let mySurname = 'Siuuu';
let myFavoriteDrink = 'Flash';
let myFavoriteAnimal = 'Dog';
const myFavoriteProgrammingLanguage = 'Си';

const userInfo = {
    myName: 'Renat',
    mySurname: 'Siuuu', 
    myFavoriteDrink: 'Flash',
    myFavoriteAnimal: 'Dog', 
    myFavoriteProgrammingLanguage: 'Си'
};

for (let key in userInfo) {
    console.log(`${key}: ${userInfo[key]}`);
};
