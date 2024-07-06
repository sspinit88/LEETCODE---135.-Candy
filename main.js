/*
135. Candy

There are n children standing in a line. 
Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

    Each child must have at least one candy.
    Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

 
Constraints:

    n == ratings.length
    1 <= n <= 2 * 104
    0 <= ratings[i] <= 2 * 104

*/

function minCandies(ratings) {
  // Инициализация массива конфет
  // Initialize the candies array
  let candies = new Array(ratings.length).fill(1);

  // Первый проход: убедитесь, что каждый ребенок имеет больше конфет, чем его левый сосед, если его рейтинг выше
  // First pass: make sure each child has more candies than its left neighbor if its rating is higher
  for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
          candies[i] = candies[i - 1] + 1;
      }
  }

  // Второй проход: убедитесь, что каждый ребенок имеет больше конфет, чем его правый сосед, если его рейтинг выше
  // Second pass: make sure each child has more candies than its right neighbor if its rating is higher
  for (let i = ratings.length - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          candies[i] = Math.max(candies[i], candies[i + 1] + 1);
      }
  }

  // Вернуть минимальное количество конфет, которое нужно иметь, чтобы распределить конфеты между детьми
  // Return the minimum number of candies you need to have to distribute the candies to the children
  return candies.reduce((a, b) => a + b, 0);
}

/*

This solution ensures that the algorithm runs in O(n) time complexity and uses O(n) space complexity. 
The two-pass approach guarantees that each child has more candies than its neighbors if its rating is higher.

Это решение гарантирует, что алгоритм работает с временной сложностью O(n) и использует пространственную сложность O(n).
Двухпроходной подход гарантирует, что у каждого ребенка будет больше конфет, чем у его соседей, если его рейтинг выше.

*/
