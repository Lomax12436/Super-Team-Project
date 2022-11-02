let apiAlignment={
  alignment:"",
};
let apiAge={
  age: "",
};
let apiSize={
  size:"",
};
let characterName = document.getElementById("name");
var charDisplay = [
  "./assets/male.dragonborn.jpg",
  "./assets/female.dragonborn.jpg",
  "assets/male.dwarf.jpg",
  "./assets/female.dwarf.jpg",
  "./assets/male.elf.jpg",
  "./assets/female.elf.png",
  "./assets/male.gnome.jpg",
  "./assets/female.gnome.jpg",
  "./assets/male.half-elf.png",
  "./assets/female.half-elf.png",
  "./assets/male.half-orc.jpg",
  "./assets/female.half-orc.png",
  "./assets/male.halfling.jpg",
  "./assets/female.halfling.jpg",
  "./assets/male.human.jpg",
  "./assets/female.human.png",
  "./assets/male.tiefling.png",
  "./assets/female.tiefling.jpg",
];

let charAge = ["Age: Young", "Age: Middle Aged", "Age: Elderly"];

let charRace = [
  "Race: Dragonborn ",
  "Race: Dwarf ",
  "Race: Elf ",
  "Race: Gnome ",
  "Race: Half-Elf ",
  "Race: Half-Orc ",
  "Race: Halfling ",
  "Race: Human ",
  "Race: Tiefling ",
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

let charGender = ["Gender: Male", "Gender: Female" ];

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
    displayImg(); 
}



function displayImg() { 
  if (character.gender==charGender[0] && character.race == charRace[0]){
  document.getElementById("charImg").src = charDisplay[0];
  }
  if (character.gender==charGender[1] && character.race == charRace[0]){
    document.getElementById("charImg").src = charDisplay[1];
    }
    if (character.gender==charGender[0] && character.race == charRace[1]){
      document.getElementById("charImg").src = charDisplay[2];
      }
      if (character.gender==charGender[1] && character.race == charRace[1]){
        document.getElementById("charImg").src = charDisplay[3];
        }
        if (character.gender==charGender[0] && character.race == charRace[2]){
          document.getElementById("charImg").src = charDisplay[4];
          }
          if (character.gender==charGender[1] && character.race == charRace[2]){
            document.getElementById("charImg").src = charDisplay[5];
            }
            if (character.gender==charGender[0] && character.race == charRace[3]){
              document.getElementById("charImg").src = charDisplay[6];
              }
              if (character.gender==charGender[1] && character.race == charRace[3]){
                document.getElementById("charImg").src = charDisplay[7];
                }
                if (character.gender==charGender[0] && character.race == charRace[4]){
                  document.getElementById("charImg").src = charDisplay[8];
                  }
                  if (character.gender==charGender[1] && character.race == charRace[4]){
                    document.getElementById("charImg").src = charDisplay[9];
                    }
                    if (character.gender==charGender[0] && character.race == charRace[5]){
                      document.getElementById("charImg").src = charDisplay[10];
                      }
                      if (character.gender==charGender[1] && character.race == charRace[5]){
                        document.getElementById("charImg").src = charDisplay[11];
                        }
                        if (character.gender==charGender[0] && character.race == charRace[6]){
                          document.getElementById("charImg").src = charDisplay[12];
                          }
                          if (character.gender==charGender[1] && character.race == charRace[6]){
                            document.getElementById("charImg").src = charDisplay[13];
                            }
                            if (character.gender==charGender[0] && character.race == charRace[7]){
                              document.getElementById("charImg").src = charDisplay[14];
                              }
                              if (character.gender==charGender[1] && character.race == charRace[7]){
                                document.getElementById("charImg").src = charDisplay[15];
                                }
                                if (character.gender==charGender[0] && character.race == charRace[8]){
                                  document.getElementById("charImg").src = charDisplay[16];
                                  }
                                  if (character.gender==charGender[1] && character.race == charRace[8]){
                                    document.getElementById("charImg").src = charDisplay[17];
                                    }
  apiStuff();
}

async function apiStuff(){
  if (character.race==charRace[0]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/dragonborn');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age+ ': ' +age;
  document.getElementById("racePop").textContent = character.race+ ': ' +size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[1]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/dwarf');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age+ ': ' +age;
  document.getElementById("racePop").textContent = character.race+ ': ' +size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[2]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/elf');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age + ': ' +age;
  document.getElementById("racePop").textContent = character.race + ': ' + size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[3]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/gnome');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age + ': ' +age;
  document.getElementById("racePop").textContent = character.race + ': ' + size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[4]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/dhalf-elf');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age + ': ' + age;
  document.getElementById("racePop").textContent = character.race + ': ' + size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[5]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/half-orc');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age + ': ' + age;
  document.getElementById("racePop").textContent = character.race + ': ' + size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[6]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/halfling');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age + ': ' + age;
  document.getElementById("racePop").textContent = character.race + ': ' + size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[7]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/human');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age + ': ' + age;
  document.getElementById("racePop").textContent = character.race + ': ' + size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
if (character.race==charRace[8]){
  const response = await fetch('https://www.dnd5eapi.co/api/races/tiefling');
  const data= await response.json();
  const { size_description, age, alignment}=data;
  document.getElementById("agePop").textContent = character.age + ': ' + age;
  document.getElementById("racePop").textContent = character.race + ': ' + size_description;
  document.getElementById("alignPop").textContent = character.align + ': ' + alignment;
}
}


document.getElementById("randomize").addEventListener("click", getRandom);
