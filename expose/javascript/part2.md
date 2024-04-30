1. 3 // because there are three prices.
2. 150 // because the last price is 300, and discount is 50% so half the price of 300
3. 150 // because the last price is 300, and discount is 50% so half the price of 300
4. [ 50, 100, 150 ] // It return the array of finalPrice.
5. ReferenceError: i is not defined  because we use let. i define in for, not function.
6. ReferenceError: discountedPrice is not defined because we use let.
7. 150 // let and console is in same level.
8. [ 50, 100, 150 ] //the discounted have been define same level as console and can be use within the for as well.
9. ReferenceError: i is not defined because we use let. i define in for, not function.
10. 3 // const just not allow you to change, but you can print
11. [ 50, 100, 150 ] // it not count as change array? and the discountedPrice always create new discountedPrice every loop so it fine.
12.
A. student.name                     // Sarah
B. student["Grad Year"]             // 2022
C. student.greeting()               // Hello!
D. student["Favorite Teacher"].name // Thomas Powell
E. student.courseLoad[0]            // CSE 110
13.
A. 32               // since integers map to their exact string representation
B. 1                // since string map to int
C. 3                // since null equal 0 in int
D. 3null            // null map to exact string
E. 4                // true = 1 in int
F. 0                // since false and null map to 0
G. 3undefined       // undefined map to string
H. NaN              // there are no int that undefined map to.
14.
A. true     // since string map to number 2 > 1
B. false    // They compare the lexicographically of '2' and '1', not number
C. true     // after conversion '2' to 2, it is equal
D. false    // string is not equal number type
E. false    // true convert to '1', so not equal
F. true     // both are true, thus it return true.
15. The different between == and === is that:
== compares twp variables after doing type conversion if necessary.
=== just compare without conversion.

17. Step by steps:
first we pass [1, 2, 3] in to function with dosomething as callback parameters.
the function take array and pass to it with function doSomething to the newarray create with in the function.
doSomething mutiply num by 2.
therefore, the new array that return is [2, 4, 6], which is the double of original array.

19. 
1   // immediately print
4   // immediately print after 1
3   // print as soon as possible after stack is clear
2   // print after 1 second.
