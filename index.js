function theBeatlesPlay (musicians, instruments)
{
  var array = [];
  for (let i = 0; i < musicians.length; i++)
  {
    let string = `${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  return array;
}

function johnLennonFacts  (array)
{
  let i = 0;
  let newArray = [];
  while (i <= array.length)
  {
    newArray[i] = array[i] + '!!!';
  }
  return newArray;
}


