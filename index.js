function takeANumber(line,name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currenLine(currentLine) {
  var string = 'The line is currently:';
  for (let i=0;i<currentLine.length;i++)
}