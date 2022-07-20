function fact(n)
{
    if(n===1)
      return n;
    return n*fact(n-1);
}


function numberOfBinaryTreeTopologies(n) {
   var num=fact(2*n)
   var din=fact(n)*fact(n+1);
   var ans=num/din;
   return ans;
}


exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
