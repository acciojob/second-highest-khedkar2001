function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num < max && num > second) {
      second = num;
    }
  }

  return second === -Infinity ? -Infinity : second;
}

// Automatically prompt and alert logic for Cypress
(function () {
  const n = parseInt(prompt("Enter number of elements:"), 10);
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Enter element ${i + 1}:`), 10));
  }

  const result = secondHighest(arr);
  alert(String(result)); // Important: pass string for Cypress to capture
})();
