/*
*Conditionals,Functions, Scope and loops.
*/
// Equals
let equals = 1 === 1;
console.log(equals);


// Greater than
let greaterThan = 5 > 1;


// Less Than
let lessThan = 2 < 10;


// Greater than
let greaterThanEq = 5>=5;


//Less tha equals
let lessThanEq = 4< = 9;


//Not Equals
let notEquals = 5 !== 2;


let storeA =4.40;
let storeB =4.40;
let storeAIsLower = storeA < storeB ;

function compareStorePrices (StoreA, storeB) {
    let storeAIsLower = storeA< storeB;
    if (storeAIsLower){




        if (storeAISLower){
            console.log("Store A has a lowe price.")
        }
        else if (StoreB < storeA){
            console.log ("Store B has a lower price.")
        }
        else{
            console.log ("Their prices are equal.")
        }

        compareStorePrices(10,5);

        compareStorePrices(7,10);


        functionc squareNum (number){
            let squared=  number * number;
            return squared;
        }

        let squsquareNum= squareNum(10);
        console.log (squareNum);

        /*...*/
        /*...*/
        /*...*/

        let x = 10;
        function add numbers(n,m){
            console.log(x);
            let b;
            if (1===1){
                b=8;
            }
            console.log(b)
            return n+ m;
        }
        addNumbers (1,2,10);
        /*...*/
        /*...*/
        /*...*/
//             0 1 2 3 4 5 6
        let ourArray= [1,2,3,4,5,1,7];

        for(let i = 0; i<arrLen; i++){

//console.log(I is equal to:"+ i");
            console.log (ourArray[i]);
        }

        /*...*/
        /*...*/
        let x=0;
        while(x<10){
            console.log('Ran');
            x=x+1;
        }
