// @ts-nocheck

/* INTO PROGRAMMING */

// 'Up & Going' is an introduction to several basic concepts of programming - of course we lean toward JS specifically
// this book starts off explaining the basic principles of programming at a very high level
// chapter 1 should be approached as a quick overview of the things you'll want to learn more about and practice to get into programming

/* CODE */

// a program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks to perform
// the rules for valid format and combinations of instructions is called a computer language, sometimes referred to as its syntax, much the same as English tells you how to spell words and how to create valid sentences

/* Statements */

// in a computer language, a group of words, numbers and operators that performs a specific task is a statement
// in JS, a statement might look as follows: a = b * 2; the characters a and b are called variables which are like simple boxes you can store any of your stuff in
// in programs, variables hold values (like the number 42) to be used by the program
// think of them as symbolic placeholders for the values themselves
// by contrast, the 2 is just the value itself, called a literal value, because it stands alone without being stored in a variable
// the = and * characters are operators which performs actions with the values and variables such as assignment and mathematic multiplication
// programs are just collections of many sch statements, which together describe all the steps that it takes to perform your program's purpose

/* EXPRESSIONS */

// statements are made up of one or more expressions
// an expression is any reference to a variable or value, or a set of variables and values combined with operators
// for example: a = b * 2; has four expressions in it
// 2 is a literal value expression, b is a variable expression, b * 2 is an arithmetic expression, a = b * 2 is an assignment expression
// a general expression that stands alone is also called an expression statement: b * 2; which is not very common
// a more common expression statement is a call expression statement: alert(a);

/* EXECUTING A PROGRAM */

// a special utility on the computer (either an interpreter or a compiler) is used to translate the code you write into commands a computer can understand
// for some languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code
// for others, the translation is done ahead of time, called compiling the code, so when the program runs later, what's running is actually the already compiled computer instructions ready to go
// it's typically asserted that JS is interpreted, because your JS source code is processed each time it's run
// but that's not entirely accurate, the JS engine actually compiles the program on the fly and then immediately runs the compiled code

/* TRY IT YOURSELF */

// print text in the developer console
a = 21;
b = a * 2;
console.log(b);

// getting user input - does not work in node
// age = prompt("Tell me your age:");
// console.log(age);
