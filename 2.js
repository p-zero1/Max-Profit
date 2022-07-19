function minimumWaitingTime(queries) {

   var n=queries.length;
     queries.sort(function(a, b){return a-b});        // Sorts queries array in ascending order
     var ans=0;
     for(var i=0;i<n-1;i++)
     {
       // console.log(queries[0]);
           ans=ans+queries[i]*(n-1-i);
     }
     return ans;

}


exports.minimumWaitingTime = minimumWaitingTime;
