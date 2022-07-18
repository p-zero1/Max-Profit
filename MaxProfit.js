function maxProfitWithTransactions(prices,k){
           var n=prices.length;
           const array = new Array(2).fill(0).map(() => new Array(k+1).fill(0));
             
           for(var i=n-1;i>=0;i--){
            for(var j=0;j<2;j++){
                for(var l=1;l<=k;l++){
                    var buy=0;
                    if(j==1){
                        buy=Math.max(-prices[i]+array[0][l],array[1][l]);
                    }
                    if(j==0){
                        buy=Math.max(prices[i]+array[1][l-1],array[0][l]);
                    }
                    array[j][l]=buy;
                }
            }
           }
           return array[1][k];
}

exports.maxProfitWithKTransactions=maxProfitWithTransactions;
