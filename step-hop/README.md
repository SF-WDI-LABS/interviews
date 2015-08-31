## Step Hop

**Difficulty**: Easy, then Harder  
**Concepts**: Recursion  
**Extension**: Dynamic Programming

Sam loves to hop up stairs. Each time she moves up stairs, she either hops up one step, or hops up two steps.  For 4 stairs, two possible paths she might take are:


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


Key Insight:
* the number of ways to hop n stairs is:
  * the number of ways to hop n-1 stairs (since from the n-1st stair you can hop up 1), plus
  * the number of ways to hop n-2 stairs (since from the n-2nd stair you can hop up 2)
  * note that the case where you hop up 1, twice, from the n-2nd step is already covered

Key Extra Insight:
* By using an iterative instead of a recursive approach, starting from the base case, and remembering solutions we need to reuse, we can cut the number of function calls we need to make by **A LOT**.  
Fun Fact:
* This is the basic foundation of Dynamic Programming, and this problem is one of the simplest examples of Dynamic Programming. 
* The change takes the run time from about O(1.618^n) (exponential)  to O(n) -- WOW.
* [The time to compute waysToHop(70) could go from about 4 years to about 3 microseconds](http://www.ccs.neu.edu/home/lieber/courses/csg110/sp08/project/project10/dyn-prog.htm). 
