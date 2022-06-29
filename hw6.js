function hw6(){ 

numOne=parseInt(document.getElementById("numOne").value);
numTwo=parseInt(document.getElementById("numTwo").value);
sum=adder(numOne,numTwo);
prod=multplier(numOne,numTwo);
document.getElementById("result").value=sum;
document.getElementById("res").value=prod;
console.log(sum, prod);
arr1Str= document.getElementById("arrOne").value ;
arr2Str= document.getElementById("arrTwo").value ;

var arr1=arr1Str.split(/\s+/);// splitting with white space... and storing in an array
var arr2=arr2Str.split(/\s+/);// splitting with white space... and storing in an array 

var arrSum=[];
var arrProd=[];

for(index=0;index<arr1.length;index++){
  
 arrSum[index]=adder(parseInt(arr1[index]),parseInt(arr2[index]));
 arrProd[index]=multplier(parseInt(arr1[index]),parseInt(arr2[index]));
}

console.log(arrSum);
console.log(arrProd);
document.getElementById("resultarr").value=arrSum;
document.getElementById("resarr").value=arrProd;




}
 
function adder(valOne, valTwo)
{
    return valOne+valTwo;

}
function multplier(valOne, valTwo)
{
 return valOne*valTwo; 
}
function displayer(space)
{
    return space;
}
