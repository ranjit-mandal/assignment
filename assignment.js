https://github.com/ranjit-mandal/assignment
    
    // kilometerToMeter:
function kilometerToMeter(meter){
    const kilometer = meter/1000;
    return kilometer;
}
    var lengthMeter = 3000;
    var kilometer = kilometerToMeter(lengthMeter);
    return kilometer;



    // badgetCalculator: Method-1
var watchAmount = 8;
var phoneAmount = 1;
var laptopAmount = 1;

const watchRate = 50;
var watchPrice = watchAmount * watchRate;

const phoneRate = 100;
var phonePrice = phoneAmount*phoneRate;

const laptopRate = 500;
var laptopPrice = laptopAmount*laptopRate;

var totalPrice = watchPrice+phonePrice+laptopPrice;
return totalPrice;

//badgetCalculator: Method-2
const arr = ['watch', 'phone', 'laptop'];
const rate = [50, 100, 500];

var watchCost = rate[0]*2;
var phoneCost = rate[1]*5;
var laptopCost = rate[2]*2;

var totalCost = watchCost+phoneCost+laptopCost;
return totalCost;




// hotelCost
var day = 21;
var payableTaka = 0;
if(day <= 10){
payableTaka = day * 100;
}else if(day <= 20){
    var firstPart = 10 * 100;
    var remaining = day - 10;
    var secondPart = remaining * 80;
    payableTaka = firstPart + secondPart;
}else{
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    payableTaka = firstPart + secondPart + thirdPart;
}
    return payableTaka;

// megaFriend
    var friendsArray = ['Manna Dey', 'Hemanta Mukharjee', 'Lata Mongeskar', 'Satinath Mukharjee'];
  var long = 0;
    for (i = 0; i<friendsArray.length; i++) {
    if (friendsArray[i].length>long) {
      long = friendsArray[i].length;
      var longest = friendsArray[i];
    }
  }
    return longest;