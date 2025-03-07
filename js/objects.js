var emp = new Object();
emp.id = 101;
emp.name = "john";
emp.code = 5213;

console.log(emp);
console.log(emp.id);
console.log(emp.name); // john
console.log(emp.code); // 5213

function emp(id, code, name) {
  this.id = id;
  this.code = code;
  this.name = name;
}
console.log(new emp(1, 5123, "john"));
