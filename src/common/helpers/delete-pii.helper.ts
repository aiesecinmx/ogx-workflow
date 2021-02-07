export function deletePII(obj: any) {
  const person = JSON.parse(JSON.stringify(obj));
  delete person.password;
  delete person.lastName;
  delete person.email;
  delete person.phone;
  return person;
}
