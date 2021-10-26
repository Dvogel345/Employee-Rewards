/* Activity - Employee Rewards - Starter Code 

/* Construct conditional statements that meet the requirements: */
/* ================================== */


// variable declaration
// let associateBanker =  [56123, 5, 4]; //employeeId, checking, years
// let empId = associateBanker[0]       //employee Id number
// let empChecking = associateBanker[1] //number of new checking 
// let empYears = associateBanker[2];   //years employed

// let seniorBanker =     [77227, 1, 2]; //employeeId, checking, years
// let empId = seniorBanker[0]       //employee Id number
// let empChecking = seniorBanker[1] //number of new checking 
// let empYears = seniorBanker[2];   //years employed

// let juniorBanker =     [66225, 5, 3]; //employeeId, checking, years
// let empId = juniorBanker[0]       //employee Id number
// let empChecking = juniorBanker[1] //number of new checking 
// let empYears = juniorBanker[2];   //years employed

// let temporaryBanker =  [56677, 5, 3]; //employeeId, checking, years
// let empId = temporaryBanker[0]       //employee Id number
// let empChecking = temporaryBanker[1] //number of new checking 
// let empYears = temporaryBanker[2];   //years employed

let midBanker =        [22151, 2, 6]; //employeeId, checking, years
let empId = midBanker[0]       //employee Id number
let empChecking = midBanker[1] //number of new checking 
let empYears = midBanker[2];   //years employed

//continue same pattern/naming convention for each banker
//leaving only one variable declaration section uncommented each 'Run'

//<--Your code goes here-->

/*1. If the employee has 1 year with the company, 1 new checking account: Output: 'Ship 50.00 Amazon Gift Card'
Otherwise output:'Incentives not met'*/
if (empYears==1 && empChecking==1){
  console.log("Ship $50.00 Amazon Gift Card");
} else {
  console.log("Incentives have not met");
}

/*2. If the employee has 2 years with the company, 3+ new checking accounts:  Output: 'Ship 50.00 Amazon Gift Card'
Otherwise output:'Ship $100.00 Visa Gift Card'*/
if (empYears==2 && empChecking>=3){
  console.log("Ship $50.00 Amazon Gift Card");
} else {
  console.log("Ship $100.00 Visa Gift Card");
}
/*3. If the employee has 3 years with the company, 2+ new checking accounts:  Output: 'Ship 700.00 Visa Gift Card'
Otherwise output:'Ship $350.00 Visa Gift Card'*/
if (empYears>=5 && empChecking>=2){
  console.log("Ship $700.00 Amazon Gift Card");
} else {
   console.log("Ship $350.00 Visa Gift Card");
}
/*4. If the employee has 5+ years with the company, 1+ new checking accounts:  Output: 'Ship 3500.00 Visa Gift Card'
Otherwise output:'Ship set of knives'
*/
if (empYears>=5 && empChecking!==0){
  console.log("Ship $3500.00 Amazon Gift Card");
} else {
  console.log("Ship set of knives");
} 

if (empYears == 0){
  console.log("Not eligible for a gift");
}

//to output when activity is complete
console.log(empId + " : Processed")

    
   