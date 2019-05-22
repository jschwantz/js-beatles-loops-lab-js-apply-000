// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var lines = [];
  
  for (i = 0; i < musicians.length; i++) {
    lines.push(musicians[i]+' plays '+instruments[i]);
  }
  return lines;
}