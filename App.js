function Test()
{
let myObject={name:"madras"};
let newObject=myObject;
myObject.name="chennai";
let myarray=["a","e","i","o","u"]
let vowelArray=myarray
myarray.push("u")
console.log(myarray)
const ECE=()=>{alert("check the console output!")}
return<div><button onClick={ECE}>Reference data types and call the function</button></div>
}
ReactDOM.render(<Test/>,document.getElementById("mydiv"))
