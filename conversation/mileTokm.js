function mileTokm(miles) {
  var km = miles * 1.60934;
  return km;
}
var milesset = 15;
var km = mileTokm(milesset);
console.log(km);
