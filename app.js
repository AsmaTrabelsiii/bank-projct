
"use strict";

///// dummy data ::
const account1 = {
  owner: "Mark Schmedtman",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

////

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

///// import elements ::

const movementsContainer = document.querySelector(".left");

const balanceAccount = document.querySelector(".balance");

const inComes = document.querySelector(".average-in");
const outMoney = document.querySelector(".average-out");
const interest = document.querySelector(".average-interest");

const userNameInput = document.querySelector(".user");
const pinInput = document.querySelector(".pin");
const btnLogin = document.querySelector(".btn-login");
const welcomeMessage = document.querySelector(".welcome");
const app = document.querySelector("main");

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
const displayUserName = function (arr) {
  arr.forEach((person) => {
    person.userName = person.owner
      .toLowerCase()
      .split(" ")
      .map((ele) => ele[0])
      .join("");
  });
};

displayUserName(accounts);

///// display summary functionnality ::

const calcDisplaySummary = function (cur) {
  const inc = cur.movements
    .filter((ele) => ele > 0)
    .reduce((acc, num) => acc + num, 0);
  //// u.u.i :
  inComes.textContent = inc;
  const outc = cur.movements
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => ele + acc, 0);

  /// u.u.i :
  outMoney.textContent = Math.abs(outc);

  const int = cur.movements
    .filter((mov) => mov > 0)
    .map((deposit, i, arr) => {
    
      return (deposit * cur.interestRate) / 100;
    })
    .filter((ele, x, y) => {
     
      return ele > 1;
    })
    .reduce((acc, ele) => acc + ele, 0);
  

  ///// u.u.i :
  interest.textContent = int;
};

// calcDisplaySummary(account3.movements, account3.interestRate);

///// display movements  :::

const displayMovements = function (cur) {
  movementsContainer.innerHTML = "";

  cur.movements.forEach(function (mov, i) {
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

    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account3.movements);

////// display blance :::

const displayBalance = function (cur) {
  const balance = cur.movements.reduce((acc, ele) => acc + ele, 0);
  ///// update ui ::
  balanceAccount.textContent = balance;
};

// displayBalance(account3.movements);

////////// authentication functionnality
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); 
  currentAccount = accounts.find((acc) => acc.userName === userNameInput.value);
  
  if (currentAccount.pin === Number(pinInput.value)) {
    welcomeMessage.textContent = `welcome back ${currentAccount.owner.split(" ")[0]}`;
    app.style.opacity = 1;
    displayMovements(currentAccount);
    calcDisplaySummary(currentAccount);
    displayBalance(currentAccount);
    userNameInput.value = "";
    pinInput.value = "";
  } else {
    alert("wrong email or password !!!");
  }
});
//////////////////////////////////
/////////////////////////////////
const transferto=document.querySelector(".transfert-input")
const transfertAmount=document.querySelector(".amount-transfert-box-input")
const transfertBtn=document.querySelector(".btn-transfert-box")
transfertBtn.addEventListener("click",function(e){
  e.preventDefault()
  if (balanceAccount.textContent>=transfertAmount.value && exist && userNameInput.value!==transferto.value )
  {
    prompt(`the transfert succced`)
  }
  else 
    alert("erreur")
})



function exist(arr){
  if(arr.find((ele)=>ele.owner===transferto.value)
  ){return true}

}