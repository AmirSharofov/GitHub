let money = 10000;
let account = 7777;
let name = 'Alex';

const abc = prompt('Как вас зовут?').toLowerCase().trim();

if (abc === 'alex') {
    const ask = prompt('Номер счета?');
    if (ask === account.toString()) {
        const ppp = prompt('Сколько обноличить?')
        if(ppp <= 10000){
        confirm('Все отлично')
        prompt('Сколько снял? Сколько обноличивать?')
        
        }else{alert('Недостаточно денег')}
    } else { alert('Пользователь не найден, досвидули') }
} else { alert('Пользователь не найден, досвидули') }


