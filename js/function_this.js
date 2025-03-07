function Emp(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
function PermanentEmp(a, b) {
  Emp.call(this, a, b, a + b);
}
console.log(new PermanentEmp(5, 10).c);
// console.log(new PermanentEmp(101,"John Martin").name);

PermanentEmp.prototype = Object.create(Emp.prototype);
PermanentEmp.prototype.constructor = PermanentEmp;
PermanentEmp.prototype.calculateAnnualSalary = function () {
  return this.c * 12;
};

console.log(new PermanentEmp(5, 10).calculateAnnualSalary());

// Polymorphism
function Emp(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Emp.prototype.calculateAnnualSalary = function () {
  throw new Error("Method not implemented");
};

function PermanentEmp(a, b, c) {
  Emp.call(this, a, b, c);
}

PermanentEmp.prototype = Object.create(Emp.prototype);
PermanentEmp.prototype.constructor = PermanentEmp;
PermanentEmp.prototype.calculateAnnualSalary = function () {
  return this.c * 12;
};
