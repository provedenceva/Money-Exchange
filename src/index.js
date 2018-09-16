// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var err = {};
	err.error = "You are rich, my friend! We don't have so much coins for exchange";
	var result = {};
	var H = 0;
	var Q = 0;
	var D = 0;
	var N = 0;
	var P = 0;
	if (currency > 10000) {
	return err};
	while (currency >= 50 && currency < 10000) {
		currency = currency - 50;
		H++
	}
	while (currency >= 25 && currency < 10000)  {
		currency = currency - 25;
		Q++
	}
	while (currency >= 10 && currency < 10000)  {
		currency = currency - 10;
		D++
	}
	while (currency >= 5 && currency < 10000)  {
		currency = currency - 5;
		N++
	}
	while (currency >= 1 && currency < 10000)  {
		currency = currency - 1;
		P++
	}
if (H != 0) {
	result.H= H;
	}
	if (Q != 0) {
	result.Q= Q;
	}
	if (D != 0) {
	result.D= D;
	}
	if (N != 0) {
	result.N= N;
	}
	if (P != 0) {
	result.P= P;
	}
return result
}
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

