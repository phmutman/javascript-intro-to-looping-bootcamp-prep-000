var tion = []
var i = 0
function forLoop (tion){
  for(var i = 0; i < 25; i++){
    if (i === 1 ) {
      tion[i] = 'I am ' + i + ' strange loop.'
  } else {
    tion[i] = 'I am ' + i + ' strange loops.'
  }
}
 return tion
}

console.log(forLoop(tion))

function whileLoop (n) {
  while(n => 0) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop (num) {
  function incrementVariable(){
    i += 1
    return i
  }
   do {
     console.log("I run once regardless.")
   } while (incrementVariable() < num)
}
