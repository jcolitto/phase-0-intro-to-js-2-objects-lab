const employee = {
    name: "Sam",
  streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
const newObj = {...obj};
newObj[key] =  value;
return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  
  employee.streetAddress = "12 Broadway";

  return employee;
}

function deleteFromEmployeeByKey(obj, key, value) {
  const newObj2 = { ...obj };
  delete newObj2.name;
  return newObj2;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
  delete employee.name;
  return employee;
}
