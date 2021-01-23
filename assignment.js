//kilometerToMeter
//budgetCalculator
//hotelCost
//megaFriend
/*--------------------------- */

//kilometerToMeter 01
//Kilometer to meter converter function.
var kiloMeter = 1000;

function kilometerToMeter(kilo){
    var meter = kilo * kiloMeter;
    return meter;
}

var kiloMeter = kilometerToMeter(5.5); // Enter your Kilometer value here
console.log("Meter = ", kiloMeter);

/*---------------------------------------*/

//budgetCalculator 02
// You can find out which country you live in by looking at your money budget through this function.
// Bangladeshi = $1000
// American = $2000
// Alien = $2000++
function budgetCalculator(amount){
    var place = 0;

    if (amount <= 1000) {
        place = amount * 10;
        place = "Bangladeshi";

    }
    else if(amount <= 2000) {
        var basic = 1000 * 10;
        var dollar = amount - 1000;
        var standard = dollar * 20;
        place = basic + standard;
        place = "American";
    }
    else{
        var basic = 1000*10;
        var standard = 1000*20;
        var dollar = amount - 2000;
        var business = dollar * 3000;
        place = basic + standard + business;
        place = "Alien";
    }
    return place;
}

var count = budgetCalculator(1200);  // Enter your Dollar here
console.log("You are in =", count);

/*--------------------------------------------- */

//hotelCost 03
//You can use this function to determine which hotel you want to stay in.
function hotelCost(room){
    var price = 0;

    if (room <= 500) {
        price = "Silver";
    }
    else if(room <= 1000) {
        price = "Golden";
    }
    else{
        price = "You are out of budget";
    }
    return price;
}

var count = hotelCost(1100); // Enter your Budgets amount here
console.log("Your room is = ", count);

/*------------------------------------------------------*/

//megaFriend 04
// Remember, Your friends have friend promo codes.
// You have many friends. If any of them ask you, what kind of friend am I? Then using this function you can easily identify them by inputting their code number.
function megaFriend(friends){
    var friCode = 0;

    if(friends <= 100){
        friCode = 'Your are my sample friend';
    }
    else if(friends <= 200){
        friCode = 'You are my close friend';
    }
    else{
        friCode = 'You are my best friend';
    }
    return friCode;
}

var myFriends = megaFriend(201); // Enter your friends code here (Value: 1-200+).
console.log(myFriends);

