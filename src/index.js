// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj={};
    var sum = currency;
    var p=0;
    var h=0;
    var q=0;
    var d=0;
    var n=0;
    if (currency <= 0)
    {
        return obj = {};
    }
    else if (currency >= 10000)
    {
        return obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else{
        
            while (sum >= 50)
            {
                sum = sum - 50;
                h = h+1;
            }
            while (sum >= 25)
            {
                sum = sum - 25;
                q = q + 1;
            }
            while (sum >= 10)
            {
                sum = sum - 10;
                d = d + 1;
            }
            while (sum >= 5)
            {
                sum = sum - 5;
                n = n + 1;
            }
            while (sum >= 1)
            {
                sum = sum - 1;
                p = p + 1;
            }
            obj.H = h;
            obj.Q = q;
            obj.D = d;
            obj.N = n;
            obj.P = p;
            for (key in obj){
                if (obj[key] == 0){
                    delete obj[key];
                }
            }

            return obj;
           
        }
}
