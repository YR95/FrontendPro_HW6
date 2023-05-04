/*
 Частина №1

 Створити скрипт яки повинен виконувати наступне:

 -запитати у користувача рік народження;
 -запитати в нього, в якому місті він живе;
 -запитати його улюблений вид спорту.
 При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
     його вік;
 якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце
  точок підставляємо країну, столицею якої є місто. Інакше показуємо
   йому “ти живеш у місті…”, де місце точок – введене місто.

     Частина №2
 Вибираємо самі три види спорту та три чемпіони у цих видах.
  Відповідно, якщо користувач вкаже один із цих видів спорту,
  то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
 Все це має бути відображено в одному вікні (алерті).
 Якщо в якомусь випадку він не захоче вводити інформацію і натисне
 Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

*/

year = prompt('Рік твого народження: ');

if ((year === null) || (year === '')) {
  age = 'вік: Шкода, що Ви не захотіли ввести рік народження';
} else {
  age = `вік: ${new Date().getFullYear().valueOf() - parseInt(year)}`;
}

city = prompt('У якому місці мешкаєш: ');

if ((city === null) || (city === '')) {
  city = ' Шкода, що Ви не захотіли ввести місто';

} else {
  if ((city === 'Київ') || (city === 'Вашингтон') || (city === 'Лондон')) {
    city = `Ти живеш у столиці: ${city}`;
  } else {
    city = `Ти живеш у місті:  ${city}`;
  }
}

sport = prompt('Улюблений вид спорта: ');

if ((sport === null) || (sport === '')) {
  resSoprt = ' Шкода, що Ви не захотіли ввести спорт';
}
switch (sport) {
  case 'бокс':
    resSoprt = 'Круто! Хочеш стати Кличко? ';
    break;
  case 'теніс':
    resSoprt = 'Круто! Хочеш стати Стаховський?';
    break;
  case 'плавання':
    resSoprt = 'Круто! Хочеш стати Єгошин?';
    break;

}

alert(`${age} ${city} ${resSoprt}`);