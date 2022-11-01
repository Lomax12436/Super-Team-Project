let characterName = document.getElementById("name");
let charAge = [" Age: Young", "Age: Middle Aged", "Age: Elderly"];
let charRace = [
  "Race: Dragonborn",
  "Race: Dwarf",
  "Race: Elf",
  "Race: Gnome",
  "Race: Half-Elf",
  "Race: Half-Orc",
  "Race: Halfling",
  "Race: Human",
  "Race: Tiefling",
];
let charAlign = [
  "Alignment: Chaotic Evil",
  "Alignment: Chaotic Good",
  "Alignment: Chaotic Neutral",
  "Alignment: Lawful Evil",
  "Alignment: Lawful Good",
  "Alignment: Lawful Neutral",
  "Alignment: Neutral",
  "Alignment: Neutral Evil",
  "Alignment: Neutral Good",
];
let charClass = [
  "Class: Barbarian",
  "Class: Bard",
  "Class: Cleric",
  "Class: Druid",
  "Class: Fighter",
  "Class: Monk",
  "Class: Paladin",
  "Class: Ranger",
  "Class: Rogue",
  "Class: Sorcerer",
  "Class: Warlock",
  "Class: Wizard",
];
let charGender = ["Gender: Male", "Gender: Female", "Gender: Non-Bionary"];

let character = {
  name: "",
  age: "",
  gender: "",
  race: "",
  class: "",
  align: "",
};

function getRandom() {
  let randomAge = charAge[Math.floor(Math.random() * charAge.length)];
  let randomRace = charRace[Math.floor(Math.random() * charRace.length)];
  let randomAlign = charAlign[Math.floor(Math.random() * charAlign.length)];
  let randomClass = charClass[Math.floor(Math.random() * charClass.length)];
  let randomGender = charGender[Math.floor(Math.random() * charGender.length)];
  character.age = randomAge;
  character.race = randomRace;
  character.align = randomAlign;
  character.class = randomClass;
  character.gender = randomGender;
  console.log(character);
  populateChar();
}

function populateChar() {
  //document.getElementById("namePop").textContent = character.name;
  document.getElementById("agePop").textContent = character.age;
  document.getElementById("genderPop").textContent = character.gender;
  document.getElementById("racePop").textContent = character.race;
  document.getElementById("classPop").textContent = character.class;
  document.getElementById("alignPop").textContent = character.align;
}

document.getElementById("randomize").addEventListener("click", getRandom);
