export function calcPromo(price, quantity, { compre, pague, type }) {
  let totalValue = 0;
  if (quantity >= compre) {
    let promo = 0;
    if (type === "buyAndTake") {
      promo = pague * price;
    } else {
      promo = pague;
    }
    const rest = (quantity - compre) * price;

    totalValue = promo + rest;
  } else {
    totalValue = quantity * price;
  }
  return totalValue;
}

// Promoção aculativa:

// export function calcPromo(price, quantity, { compre, pague, type }) {
//   if (type === "buyAndTake") {
//     let totalValue = 0;
//     if (quantity >= compre) {
//       //quantas vezes ela ativou a promoção
//       const promotion_amount = quantity / compre;

//       const promotionValue = Math.floor(promotion_amount) * price * pague;

//       const rest = quantity % compre;

//       const normalValue = rest * price;
//       totalValue = promotionValue + normalValue;
//     } else {
//       totalValue = quantity * price;
//     }
//     return totalValue;
//   } else {
//     const rest = quantity % compre;

//     if (rest === 0) {
//       const divide = quantity / compre;
//       return pague * divide;
//     }
//     const divideStepTwo = (quantity - rest) / compre;
//     let finalPrice = pague * divideStepTwo;
//     finalPrice += rest * price;

//     return finalPrice;
//   }
// }
