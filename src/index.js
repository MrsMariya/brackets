module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let arr = str.split('');
  let result = true;
  if (arr.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
        stack.pop();
    } else if (arr[i] == bracketsConfig[j][0]) {
        stack.push(arr[i]);
    }
}
}
if (stack.length !== 0) {
  result = false;
}
return result;
}