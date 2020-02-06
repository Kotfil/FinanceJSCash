'use strict';
let money,time;


function start() {

      time = prompt("Введите дату в формате Цифр", '');

      while(isNaN(money) || money == "" || money == null) {
        money = prompt("Каков ваш бюджет на месяц?", '');
      }
}
start();

let appData = {
    cash: money,
    timeData: time,
    optionalExpenses: {},
    expenses: {},
    income: [],
    savings: true
};
function choosExpenses() {
  for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
          b = prompt("Во сколько обойдется?", '');

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
              a != '' && b != '' && a.length < 50) {
              console.log("done");
              appData.expenses[a] = b;
          } else {
            i = i - 1;
          }
      }
}

choosExpenses();

appData.moneyPerDay = (appData.budget /30).toFixed();

    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уроень достатка");
    }

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();
