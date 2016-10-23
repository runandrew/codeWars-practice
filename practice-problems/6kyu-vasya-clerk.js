// Vasya - Clerk

/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
*/




function tickets(array) {
  // keep a tab of 25 bills, and 50 bills
  // if 100 given, check if 50 and 25 exist, then subtract one; else if check is 3 25's exist, then subtract
  // if 50 given, check if 25 exist, then subtract one; Add one to 50;
  // if 25 given; Add one to 25
  var m25 = 0;
  var m50 = 0;
  var m100 = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 100) {
      if (m25 >= 1 && m50 >= 1) {
        m25--; m50--;
      } else if (m25 >= 3) {
        m25 -= 3;
      } else {
        return "NO";
      }
    } else if (array[i] === 50) {
      if (m25 >= 1) {
        m25--; m50++;
      } else {
        return "NO";
      }
    } else {
      m25++;
    }
  }
  return "YES";
}

console.log(tickets([25, 25, 25]));
