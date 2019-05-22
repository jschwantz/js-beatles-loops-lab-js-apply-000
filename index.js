// add solution here
function theBeatlesPlay(musicians, instruments) {
  var lines = [];
  
  for (var i = 0; i < musicians.length; i++) {
    lines.push(musicians[i]+' plays '+instruments[i]);
  }
  return lines;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  
  var times = [];
  
  do {
    num++;
    times.push('I love the Beatles!');
  }
  while (num < 15);
  
  return times;
}