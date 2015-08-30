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

Choose your own adventure books can usually either end happily, or end badly (with the main character's death/capture/etc).  Write a program to find the minimum number of decisions that could lead to a happy ending, in a choose your own adventure book.  

Key questions: 
* How will you know if an ending is "happy"? (assume happy ending pages say "Congratulations!")
* What data structure will you use to represent the choose your own adventure book?  
* Can we ever have two routes return to the same page?  --- start with no (so can use trees). Then, as an extension, yes.
* Can we ever have a cycle where you keep visiting the same pages over and over again --- no. That wouldn't be a very fun book. 