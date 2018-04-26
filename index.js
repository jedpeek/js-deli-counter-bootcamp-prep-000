//var katzDeli = [];
//var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}`
  }
  else{
      return "The line is currently empty."
  }
}