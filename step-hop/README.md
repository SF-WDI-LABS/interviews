# Step Hop

**Difficulty**: Easy, pending Key Insight. Bonus is harder.
**Concepts**: Recursion  
**Extension**: Dynamic Programming

## Problem Statement

Sam loves to hop up stairs. Each time she moves up stairs, she either hops up one step, or hops up two steps.  For 4 stairs, two of the possible paths she might take are:


* ground, to first, to third, to fourth
```
                  __3__
              _2_|
          ___|
      _1_|
 ____|
```

* ground, to second, to fourth
```
                  __2__
              ___|
          _1_|
      ___|
 ____|
```

Write a function that, given a number of stairs, calculates how many ways Sam could possibly hop up that many stairs. 


## Key Insight / Hint

The number of ways to hop n stairs is:
  * the number of ways to hop `n-1` stairs (since from the `n-1`th stair you can hop up 1 to reach the end), **plus**
  * the number of ways to hop `n-2` stairs (since from the `n-2`th stair you can hop up 2 to reach the end)

This results in a familiar formula:  `ways(n) = ways(n-1) + ways(n-2)`.  That's right, the formula for the `nth` fibonacci number! If a candidate is spending too much time on the stair aspect of the problem, consider having them implement the solution from the formula instead of puzzling through the connection to stairs.



## Bonus

Sam has learned to jump up three stairs at once. So, for example, she can hop all the way from the ground to the third stair.  Modify your function to calculate the number of ways she can now hop up `n` steps.

**New formula/hint**: `ways(n) = ways(n-1) + ways(n-2) + ways(n-3)`.  

Check that the function is correct for 0, 1, and 2 stair edge cases. 

## Dynamic Programming

By (1) using an iterative instead of a recursive approach, (2) starting from the base case, and (3) remembering solutions we need to reuse, we can cut the number of function calls we need to make by **A LOT**.  This is the basic foundation of Dynamic Programming, and this problem is one of the simplest examples of Dynamic Programming. The change takes the run time from about `O(1.618^n)` ("exponential run time")  to `O(n)` [The time to compute waysToHop(70) could go from about 4 years to about 3 microseconds](http://www.ccs.neu.edu/home/lieber/courses/csg110/sp08/project/project10/dyn-prog.htm). WOW.
