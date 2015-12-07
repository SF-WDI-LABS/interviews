## Rainy City

**Difficulty**: Medium-Hard
**Concepts**: Looping and Arrays

You have an array of numbers representing the heights of buildings on a perfectly-packed, 2-dimensional city block.  Each building has width 1. Assuming infinite rain is available, how many units of rain water will collect on top of the roofs of the city block?

```
 __
|  |      __
|  |__   |  |
|     |__|  |
|           |

[ 4, 2, 1, 3 ]
```

```
 __
|  |      __
|  |W_ W |  |    => 3
|     |W_|  |
|           |
```


Other test cases might include:   
	* [0,1,2] => 0   
	* [2,0] => 0    
	* [1,0,1] => 1   
	* [0,1,0] => 0   
	* [2,0,4,0,1] => 3   
	* [3,2,1,3,2,0] => 3   
	* [2,1,0,4,0,1,0,2,3] => 12    




## Run Time Analysis

Given solution run time: `O(n)`.  The algorithm makes two passes through the array: one to find the max and two half-passes to calculate the amount of water in each direction.  Each step within these loops takes constant time. The space complexity is `O(1)` because we're only ever storing a few temporary variables. 