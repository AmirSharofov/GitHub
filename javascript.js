let money = 10000;
let account = 7777;
let name = 'Alex';

const abc = prompt('Как вас зовут?').toLowerCase().trim();

if (abc === 'alex') {
    const ask = prompt('Номер счета?');
    if (ask === account.toString()) {
        // Начальный баланс
        let currentBalance = money

        // Переменная для хранения общей суммы снятий
        let totalWithdrawn = 0;

        // Опросник для определения снятых средств и оставшегося баланса
        while (true) {
            let withdrawalAmount = parseFloat(prompt("Введите сумму снятия (или 0 для завершения):"));

            // Проверка на корректность ввода
            if (isNaN(withdrawalAmount) || withdrawalAmount < 0) {
                alert("Некорректная сумма снятия. Пожалуйста, введите положительное число или 0 для завершения.");
                continue;
            }

            // Проверка на превышение баланса
            if (withdrawalAmount > currentBalance) {
                alert("Сумма снятия превышает доступный баланс. Пожалуйста, введите другую сумму или 0 для завершения.");
                continue;
            }

            // Если пользователь ввел 0, завершаем опросник
            if (withdrawalAmount === 0) {
                break;
            }

            // Обновление общей суммы снятий и остатка баланса
            totalWithdrawn += withdrawalAmount;
            currentBalance -= withdrawalAmount;
        }

        // Вывод результатов
        console.log("Общая сумма снятий:", totalWithdrawn);
        console.log("Остаток на счете:", currentBalance);


    } else { alert('Пользователь не найден, досвидули') }
} else { alert('Пользователь не найден, досвидули') }


