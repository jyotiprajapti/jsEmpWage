console.log("Welcome to Employee Wage Computation Program"); 
let x = Math.floor(Math.random() * 2);
// if(x===1){
//     console.log("Employee is present")
// }else{
//     console.log("Employee is absent")
// }
switch(x){
    case 1:
        console.log("Employee is present");
        break;
    case 0:
        console.log("Employee is absent")
        break;
}
const wagePerHour = 20;
const fullDayHour = 8;
const partTimeHour = 8; 
const workingPerMonth = 20;
const wagePerMonthfullTime  = wagePerHour*fullDayHour*workingPerMonth;
let workingHour = 0;
let workingDays =0;
let totalWage =0;
while(workingHour <= 100||workingDays <= 20){
    workingHour+=1;
    workingDays+=1;
    totalWage = workingHour*wagePerHour;
    console.log(totalWage);
}
console.log("total wage is "+ totalWage);