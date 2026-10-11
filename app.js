"use strict";

////////


///// dummy data ::
const account1 = {
  owner: "Mark Schmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, 150, -790, -3210, 1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Park Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460, 100, -400],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


const movementsContainer = document.querySelector(".left");



///// display movements  :::

const displayMovements = function (arr) {
  // bch tji 3alawl fer8a we ki nhb n3ml insertion lhaja mtt5altch m3a li 9blha 
  movementsContainer.innerHTML = "";

  arr.forEach(function (mov, i) {
    let type = mov > 0 ? "deposit" : "withdraw";

    let html = `
          <div class="${type}-container">
            <div class="${type}-info">
              <span class="${type}">${i + 1} ${type}</span>
              <span>3 DAYS AGO</span>
            </div>
            <p class="${type}-amount">
              ${mov} <i class="fa-solid fa-euro-sign"></i>
            </p>
          </div>
    `;
// block html haka win bch t7oto fi movementscontainer
    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account2.movements);

////// display blance :::
const balanceAccount = document.querySelector(".balance");

const displayBalance = function (arr) {
  const balance = arr.reduce((acc, ele) => acc + ele, 0);
  ///// update ui ::
  balanceAccount.textContent = balance;
};

displayBalance(account2.movements);

///////
let In = document.querySelector(".average-in")
let out=document.querySelector(".average-out")
let interestt=document.querySelector(".average-interest")
function deposit(arr){
   const positive=arr.filter(ele=>ele>0)
   const resultIn = positive.reduce((acc,ele)=>  acc+ele,0)
   In.textContent=resultIn

}
deposit(account2.movements)
/////
let Out = document.querySelector(".average-out")
function whithdrow(arr){
   const negative=arr.filter(ele=>ele<0)
   const resultOn = negative.reduce((acc,ele)=>  acc+ele,0)
   Out.textContent= Math.abs(resultOn) 

}
whithdrow(account2.movements)
// **************************************
////
//  const valeur=account2.interestRate
//  function interest(arr){
//     const positiveIn=arr.filter(ele=>ele>0)
// const porcentage=positiveIn.map((ele)=>(ele*valeur)/100)
// const low=porcentage.map((ele)=>ele>1)
//    const resultInt = low.reduce((acc,ele)=>  acc+ele,0)
//    interestt.textContent= resultInt

// }
//  interest(account2.movements)

////

