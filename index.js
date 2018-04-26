var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    
  }
  else{
    return "The line is currently empty."
  }
}




