let globalScope = "Global Scope";


show(); //Hoisting

function show() {
    let functionScope = "Function Scope";
    console.log(globalScope);
    console.log(functionScope);

    globalScope = "Change the global scope";    //Can change the global variable value
    let globalScope = "Local globalScope";  //Valid in only in the function, Also 
    console.log(globalScope);
}

show();
console.log(globalScope);
console.log(functionScope);    // Cannot use local variables

//CODEBLOCK
{
    let blockScope = "let Block Scope";
    var blockScope = "var Block Scope";
    console.log(blockScope);
}
console.log(blockScope);  //Cannot use outside the block 'let' variables. But 'var' variables can

