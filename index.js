function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i= 0; i<=musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(string);
  }
  return arr;
}