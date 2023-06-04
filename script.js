import { tasksArray } from "./students.js";

const getUniqueNames = () => {
  let namesSet = new Set();
  tasksArray.map((student) => {
    namesSet.add(student[0]);
  });
  return namesSet;
};

document.addEventListener("DOMContentLoaded", () => {
  const names = getUniqueNames();
  names.forEach((name) => {
    document.getElementById("names").innerHTML += `<li>${name}</li>`;
  });
});
