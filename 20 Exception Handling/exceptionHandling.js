console.log("Start");
try {
    let age = prompt("Enter your age:");
    if(isNaN(age)) {
        throw new Error("Not an valid number");
    }
    console.log(`Age is ${age}`);
}catch(e) {
    console.log("Error name: " +e.name);
    console.log("Error message: " +e.message);
}finally{
    console.log("End")
}