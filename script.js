/* 
// Task 1


let obj1 = {
    name: "Person 1", age:5
}
let obj2 = {
    age:5, name: "Person 1"
}
let sortedJSON1 = JSON.parse(JSON.stringify(obj1, Object.keys(obj1).sort()))
let sortedJSON2 = JSON.parse(JSON.stringify(obj2, Object.keys(obj2).sort()))


if(JSON.stringify(sortedJSON1) === JSON.stringify(sortedJSON2)){
    console.log("Given obj1 and obj 2 have same properties");
}
else
{
    console.log("Not equal");
}
*/
// Task 2,3
// API calls

var request = new XMLHttpRequest()
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
request.onload = function (){
    var data = request.response;
    // console.log(data);
    var result = JSON.parse(data);
    // console.log(result);
    //flag display
    for(var i=0; i<result.length; i++) {
        console.log(result[i].flags.png);
    }
    //name, region, subregion display
    for(var i=0; i<result.length; i++) {
        console.log("Name:" + result[i].name.common + ", " + "Region:" +result[i].region +", "+ "Subregion:" +result[i].subregion);
    }

}