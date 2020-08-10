function greetings(array, object) {
  let name = array.join(" ");
  return `Hello, ${name}!  Nice to have a ${object.title} ${object.occupation} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.