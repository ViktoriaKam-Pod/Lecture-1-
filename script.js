//вартість яблука заокруглена до більшого та меншого
let appleCost = 15.678;
let appleCostCeil = Math.ceil(appleCost);
let appleCostFloor = Math.floor(appleCost);
console.log(appleCostCeil, appleCostFloor)


//вартість лимону заокруглена до більшого та меншого
let lemonCost = 123.965;
let lemonCostCeil = Math.ceil(lemonCost);
let lemonCostFloor = Math.floor(lemonCost);
console.log(lemonCostCeil, lemonCostFloor)

//вартість дині заокруглена до більшого та меншого
let melonCost = 90.2345;
let melonCostCeil = Math.ceil(melonCost);
let melonCostFloor = Math.floor(melonCost);
console.log(melonCostCeil, melonCostFloor)

//загальна вартість фруктів заокруглена до меншого цілого
let fruitsCost = appleCostFloor + lemonCostFloor + melonCostFloor;
console.log(fruitsCost)

//заокруглили суму до сотень
let sumFruits = Math.round(fruitsCost/100)*100;
console.log(sumFruits)

/*булеве значення: чи є сума всіх товарів (округлена в меншу
сторону) парним чи непарним числом*/
let sumFruitsEven = Boolean(fruitsCost % 2 == 0);
let sumFruitsOdd = Boolean(fruitsCost % 2 == 1);
console.log(sumFruitsEven)
console.log(sumFruitsOdd)



/*сумa решти, при оплаті всіх товарів (без округлення), якщо
клієнт платить 500 грн.*/
let clientPay = 500;
let rest =  clientPay - fruitsCost;
console.log(rest)

//середнє значення цін, округлене до другого знаку після коми
let averageValue = (appleCost+lemonCost+melonCost) / 3;
let averageValueFixed = averageValue.toFixed(2);
console.log(averageValueFixed)


// //випадковa знижкa
let discount = Math.random(fruitsCost)*100;
console.log(discount)


/*виведена сума до оплати з випадковою знижкою округлена
до 2 знаків після коми.*/
let fruitsCostWithDiscount = fruitsCost - discount;
let fruitsCostWithDiscountToFixed = fruitsCostWithDiscount.toFixed(2);
console.log(fruitsCostWithDiscountToFixed)

//Чистий прибуток з товару
let cost = (appleCost+lemonCost+melonCost) / 2;
let profit = cost - discount;
console.log (profit)

console.log(`Вартість яблука заокруглена до більшого та меншого : ${appleCostCeil} , ${appleCostFloor} 
Вартість лимону заокруглена до більшого та меншого : ${lemonCostCeil} , ${lemonCostFloor}  
Вартість дині заокруглена до більшого та меншого : ${melonCostCeil} , ${melonCostFloor} 
Загальна вартість фруктів заокруглена до меншого цілого : ${fruitsCost}  
Загальна вартість фруктів заокруглена до сотень : ${sumFruits} 
Булеве значення: чи є сума всіх товарів (округлена до меншого цілого) парним числом : ${sumFruitsEven} 
Булеве значення: чи є сума всіх товарів (округлена до меншого цілого) непарним числом : ${sumFruitsOdd} 
Сумa решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн : ${rest} 
Cереднє значення цін, округлене до другого знаку після коми : ${averageValueFixed} 
Випадковa знижкa : ${discount} 
Сума до оплати з випадковою знижкою округлена до 2 знаків після коми : ${fruitsCostWithDiscountToFixed} 
Чистий прибуток з товару : ${profit} `)





