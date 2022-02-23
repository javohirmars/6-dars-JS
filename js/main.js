// xarajatlar

var ticket = 500;
var hotel = 250;
var museum = 120;

// valyutalar kursi

var USD_SUM = 10840;
var EURO_SUM = 12310;

// Xarajatlar dollar va yevrodan so’mga o’tkaziladi

ticketCost = Math.ceil(ticket * USD_SUM);
hotelCost = Math.ceil(hotel * USD_SUM);
museumCost = Math.ceil(museum * EURO_SUM);

// jami xarajatlar

var totalCost = ticketCost + hotelCost + museumCost;

// userdan qancha puli borligini so'raymiz

var budget = prompt('Qancha puling bor?');

// byudjetda pul yetarli bo'lsa oq yo'l tilaymiz, aks xolda biroz sabr qilishligini aytamiz

if (totalCost <= budget) {
    console.log("Oq yo’l, Alisher!");
} else {
    console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
}