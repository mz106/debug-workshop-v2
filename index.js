
const employee = ['sandra jones', 'chris lundy', 'andy smith', 'lucy davis', 'ben pleasance', 'sophie darling', 'jill white', 'fred greene', 'james black'];
const bonus = ['sandra jones', 'ben pleasance', 'fred greene']
const payDay = true;
const checkedEmployees = [];

const checkName = (employees, bonus) => {
    for (let i = 0; i < employees.length; i++) {
        for (let i = 0; i < bonus.length; i++) {
            if(employees[i] === bonus[i]) {
                checkedEmployees.push(bonus[i]);   
            } 
        }
    }
    
};

const sayHello = (payDay, employees, bonus) => {
    if(payDay) {
        const names = checkName(employees, bonus);
        for(let i = 0; i < names.length; i++) {
            console.log(`${names[i]} has been given a bonus`);
        }
    } else {
        console.log(`It's not payday`);
    }
}
sayHello(payDay, employees, bonus);