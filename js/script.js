// Carrello e sconti particolari

/*
Oggi il tuo compito Ã¨ creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietÃ  "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietÃ  "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione Ã¨ gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

function giveTotal(shoppingCart, user) {
  const freeShippingThreshold = 100;
  const shippingFee = 50;
  const ambassadorDiscount = 0.30;
  const isAmbassador = user.isAmbassador;

  let total = shoppingCart.reduce((acc, item) => acc + item.price * item.amount, 0);

  if (isAmbassador) {
    total -= total * ambassadorDiscount + shippingFee;
  }

  if (total < freeShippingThreshold) {
    total += shippingFee;
  }

  return total.toFixed(2);
}

const shoppingCart = [
  { name: "product 1", price: 34, amount: 1 },
  { name: "product 2", price: 5, amount: 1 },
  { name: "product3", price: 2, amount: 1 }
];


const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const finalTotal = giveTotal(shoppingCart, amy);

console.log(`the total is: ${finalTotal}`);

//  const prices = [34, 5, 2]
// const shippingCost = 50
// let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona! 


const userArray = []
const userAmbassadorArr = []

userArray.push(paul)
userArray.push(amy)
userArray.push(marco)

//console.log(userArray)

for (let i = 0; i < userArray.length; i++) {
  
  const currentUser = userArray[i]
  const name = currentUser.name
  const surname = currentUser.lastName
  const isAmbassador = currentUser.isAmbassador

  let ambassadorText = "non è ambassador"

  if(isAmbassador) {
    ambassadorText = "è ambassador"
    userAmbassadorArr.push(currentUser)
  }

  console.log(`${name} ${surname} ${ambassadorText}`)
  
}

console.log(userAmbassadorArr)



