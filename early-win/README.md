## Choose Your Earliest Win

**Difficulty**: Hard    
**Concept**: Trees     
**Extension**: Directed Acyclic Graphs   

A choose your own adventure book is composed of chunks of a story.   The book gives readers a choice at the end of each chunk about what the main character in the story should do.  Each option sends the reader to a different page to read another chunk of the story that says what happens based on their decision.

```
...

What will you do?
To release the fairy from the jar, go to page 89.
To ask the fairy about the Sword of Truth, go to page 43.
To run back to the clearing, go to page 200.
```

Choose your own adventure books can usually either end happily, or end badly (with the main character's death/capture/etc).  Write a program to find the minimum number of decisions that could lead to a happy ending, in a choose your own adventure book. Assume that there is only one path to each ending.  Assume also that no story choices lead back to pages that have already been read.

Given solution run time: O(n), where n is the number of story chunks.  

**Bonus**: Sometimes authors do want to have two paths through the story converge. Modify your approach to let multiple paths lead to the same ending. Still assume that no story choices lead back to pages that have already been read.


Key questions candidates should ask / and hints you can give: 
* How will you know if an ending is "happy"? (assume happy ending pages include the string "Congratulations!")
* What data structure will you use to represent the choose your own adventure book?  (tree, where each node has a story chunk and its children are all of the chunks its choices could lead to)
* Can we ever have two stories share a chunk / route to the same page?  --- start with no (so can use trees). Then, as an extension, yes.
* Can we ever have a cycle where you keep visiting the same pages over and over again --- no. That wouldn't be a very fun book. (But actually the bonus algorithm would still work.)
