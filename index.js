// Write your solution in this file!
const employee= {
    name: 'bob',
    streetAddress: '800 grape street, New York, NY 10001',
}
function updateEmployeeWithKeyAndValue(obj,key,value) {
const newObj={...obj};
newObj[key]=value;
return newObj;
}
const newEmployee = updateEmployeeWithKeyAndValue(
  employee, 
  'age',
  '23'
);
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
obj[key]=value;
return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  'age',
  '21'
);
function deleteFromEmployeeByKey(obj,key){
const newObj={...obj};
delete newObj[key];
return newObj;
}
const employeeClone = deleteFromEmployeeByKey(
  employee, 
  'age'
);
function destructivelyDeleteFromEmployeeByKey(obj,key){
  delete obj[key];
  return obj;
}
destructivelyDeleteFromEmployeeByKey(employee,'age');

