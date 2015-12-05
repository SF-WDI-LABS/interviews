# Smart Substring

**Difficulty**: Easy - Medium   
**Concepts**: Strings, Looping, Testing  
**Optional**: Regex  

Note that the extension solution approach also works fine for the base problem.

## Problem Statement 

Write a function that takes maximum 40 characters from a string, without breaking words.  If the first 40 characters would break into the middle of a word, return fewer than 40 characters by removing all the letters from that word. Keep trailing whitespace. 

```
A star is a luminous sphere of plasma held together by its own gravity. The nearest star to Earth is the Sun. Other stars, mostly in the Milky Way, are visible from Earth during the night, appearing as a multitude of fixed luminous points in the sky due to their immense distance from Earth.
  - Wikipedia
```
First 40 characters: `A star is a luminous sphere of plasma he`. This cuts the word `held`, so we leave out `he` and return the string up to and including the whitespace after `plasma`. 

Smarter approach: `A star is a luminous sphere of plasma `.

Write tests for your function.

## Key questions / hints

The candidate should write tests for this function that cover at least the following cases:  
* input string is shorter than 40 characters  
* first 40 characters end in the middle of a word  
* first 40 characters end exactly at the end of a word  
* first 40 characters ends in whitespace (check that function keeps whitespace correctly)  
* first 41+ characters are all one big word


## Runtime Analysis

The given basic solution algorithm runs in `O(1)` time. It only looks up to the first 41 characters of the string, so it does operations on a constant number of characters no matter what the length of the string.   Note that the extension/shorthand algorithm approach also works fine for the basic problem.

Regular expressions can be very tricky for runtime analysis, especially with wildcard characters. Here, though, the regular expression is checking if each character is in a limited set of whitespace characters. Without knowing exactly how the regular expression implementation works, it's reasonable for a candidate to let the interviewer know they're assuming that this can take place in `O(1)` time. The most successful candidate could offer to quickly write up a helper function that checks whether a character is a space, a tab, or a newline, for instance, in `O(1)` time.



## Extension

Modify your function so that we can use shorthand to save characters, by replacing "and" with "&".

**New runtime analysis**: The given algorithm still runs in `O(1)` time because of its early exits. Again, a lot of thought should be given to the line-by-line details of the regex, string manipulation, and array operations. Though many of the functions we use have runtimes that are `O(n)` where `n` is the length of their input strings, we know the length of the strings we are passing in is bound by a small constant - they can only be up to 40 characters long. Therefore, interviewers may let candiates count functions like `trim` and `join` as `O(1)` for our purposes, since we know a constant upper limit on their runtimes.  Overall, the algorithm will analyze up to about 83 characters of the string total. This is the case where the input string is `"and and and and and and and and and and and and and and and and and and and and and"`, which will result in an output rougly half that length, `"& & & & & & & & & & & & & & & & & & & & "`. 



