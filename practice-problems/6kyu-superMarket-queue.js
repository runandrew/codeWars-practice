// The Supermarket Queue

function queueTime (customers, n) {
  if (!customers.length) return 0;
  let tills = [];
  let time = 0;

  while (customers.length || (tills.length || !time)) {
    while (tills.length < n && customers.length) {
      tills.push(customers.shift());
    }
    let min = Math.min(...tills);
    time += min;
    tills = tills.map(till => (till - min)).filter(till => (till !== 0));
  }

  return time;
}
