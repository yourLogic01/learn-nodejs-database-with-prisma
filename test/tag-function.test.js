function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag Function", () => {
  const name = "Asyifa";
  const lastName = "Maulana";

  tagFunction`Hello ${name} ${lastName}!, how are you?`;
  tagFunction`Bye ${name} ${lastName}!, see you later`;
});

test("Tag Function sql", () => {
  const name = "Asyifa";
  const age = 23;
  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
