function getAnagrams(string) {
  var allAnagrams = [];

  function branchAnagram(string, lettersArray) {
    //if lettersArray only has 1 item that means we are done creating a combination
    if (lettersArray.length == 1) {
      allAnagrams.push(string + lettersArray[0]);
    }
    for (let i = 0; i < lettersArray.length; i++) {
      //we need to go through the lettersArray and make the next set for each letter
      //example: ('b',['a','c']) we need to make one for ('ba',['c']) and for ('bc',['a'])
      let indexString = string + lettersArray[i];
      //newArray is the array we get minus the letter we added to our string
      // so ['a','b','c']. if we add b to our string then the newArray is ['a','c']
      let newArray = lettersArray
        .slice()
        .splice(0, i)
        .concat(lettersArray.slice().splice(i + 1, lettersArray.length));
      branchAnagram(indexString, newArray);
    }
  }
  //we call the method once with an empty string to start off and the full array of letters we passed in
  branchAnagram('', string.split(''));
  //once all branches have completed we will return allAnagrams
  return allAnagrams;
}

getAnagrams('abc');
