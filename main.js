const breakCamelCase = (string) => {};


// Plan of action
// 1. identify the uppercase letter --> regex
// 2. find the index of the uppercase letter --> UppercaseIndex = string.indexOf(regex);
// 3. add an ' ' at the index before the uppercase letter --> string.splice(UppercaseIndex-1, 0, ' ');