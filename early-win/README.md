# Choose Your Earliest Win

**Difficulty**: Hard    
**Concept**: Trees, Breadth First Search   
**Extension**: Directed Acyclic Graphs   

## Problem Statement 

A choose your own adventure book is composed of many chunks of a story.   The book gives readers a choice at the end of each chunk about what the main character in the story should do.  Each option sends the reader to a different page to read another chunk of the story that says what happens based on their decision.

```
...

What will you do?
To release the fairy from the jar, go to page 89.
To ask the fairy about the Sword of Truth, go to page 43.
To run back to the clearing, go to page 200.
```

Choose your own adventure books can usually either end happily, or end badly (with the main character's death/capture/etc).  Write a program to find the minimum number of decisions that could lead to a happy ending, in a choose your own adventure book. Assume that there is only one path to each ending.  Assume also that no story choices lead back to pages that have already been read.

## Key hints (or questions candidates should ask)

* Q: What **data structure** will you use to represent the choose your own adventure book?  A: tree, where each node has a story chunk and its children are all of the chunks its choices could lead to. 

* Q: How will you know if an ending is "happy"? A: Assume all happy ending pages (and only happy ending pages) include a specific phrase, like "Congratulations!" 

* Q: Can we ever have two stories share a chunk / take a route that goes through the same page?  A: Start with no (enables tree structure). As a bonus, allow two stories to reuse the same text.

* Q: Can we ever have a cycle where you keep visiting the same pages over and over again? A: No. That wouldn't be a very fun book. (But actually the bonus solution algorithm would still work.)


## Run Time Analysis

Given solutions' run times: `O(n*s)`, where `n` is the number of story chunks and `s` is the length of the story chunk strings.  The problem cannot be solved faster since in a worst case scenario -- if a book has no happy ending -- any algorithm will still need to check each story chunk for the happy ending string. At the same time, it can be guarenteed to do only `n` or fewer checks, because it checks each story chunk at most one time.  

Then we have to consider the amount of time each check takes.  There are a lot of <a href="https://en.wikipedia.org/wiki/String_searching_algorithm" target="_blank">string matching algorithms</a> with various speeds, a decent naive algorithm takes `O(s*l)`, where `s` is the length of the longer string and `l` is the length of the string we're searching for.

With `n` checks at `O(s*l)` time each, we have `O(n*s*l)`.  Since we know exactly what string we're searching for, "Congratulations!", the `l` becomes 16, a constant factor that can be removed from the Big O calculations. This gives `O(n*s)`. 

## Bonus

Sometimes authors _do_ want to have two paths through the story converge. Modify your approach to let multiple paths lead to the same ending. Still assume that no story choices lead back to pages that have already been read.




