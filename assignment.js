    // kilometerToMeter:
function kilometerToMeter(meter){
    const kilometer = meter/1000;
    return kilometer;
}
    var lengthMeter = 3000;
    var kilometer = kilometerToMeter(lengthMeter);
    return kilometer;



    // badgetCalculator
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



// hotelCost
var day = 21;
var taka = 0;
if(day <= 10){
taka = day * 100;
}else if(day <= 20){
    var firstPart = 10 * 100;
    var remaining = day - 10;
    var secondPart = remaining * 80;
    taka = firstPart + secondPart;
}else{
    var firstPart = 10*100;
    var secondPart = 10*80;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    taka = firstPart + secondPart + thirdPart;
}
    return taka;

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