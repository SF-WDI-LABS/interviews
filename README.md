# Interviews


## Rainy City

**Difficulty**: Medium-Hard    
**Concepts**: Looping and Arrays

You have an array of numbers representing the heights of buildings on a perfectly-packed city block.  Assuming infinite rain is available, how much rain water will collect on top of the roofs of the city block?

```
 __
|  |      __
|  |__   |  |
|     |__|  |
|           |
[4, 2, 1, 3]
```




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


## Smart Substring

**Difficulty**: Easy   
**Concepts**: Strings, Looping   
**Optional**: Regex   

Write a function that takes maximum 40 characters from a string, without breaking words.  

```
A star is a luminous sphere of plasma held together by its own gravity. The nearest star to Earth is the Sun. Other stars, mostly in the Milky Way, are visible from Earth during the night, appearing as a multitude of fixed luminous points in the sky due to their immense distance from Earth.
  - Wikipedia
```
First 40 characters: `"A star is a luminous sphere of plasma he"`.

Smarter approach: `"A star is a luminous sphere of plasma"`.

**Extension**: Modify your function so that we can use shorthand to save characters, by replacing "and" with "&".



## Step Hop

**Difficulty**: Easy, then Harder   
**Concepts**: Recursion   
**Extension**: Dynamic Programming  

Sam loves to hop up stairs. Each time she moves up stairs, she either hops up one step, or hops up two steps.  For 4 stairs, two possible paths she might take are:
* ground, to 1, to 3, to 4, or
* ground, to 2, to 4

Write a function that, given a number of stairs, calculates how many ways my neice could possibly hop up that many stairs. 
