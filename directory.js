const selectAnAction = "Select An Action :\n\n1 : Adding a person\n2 : Deleting a person\n3 : Finding a person";
const notFound = "Not Found.";
const invalidSelection = "Invalid Selection.";
const invalidEntry = "Invalid Person Entry.";
const invalidNumber = "Invalid Number Selection. Process Ended.";
const noSelection = "No selection made. Process Ended.";
const personNameEntry = "Person Name :";
const personNumberEntry = "Phone Number (11 digit) :";
const refreshPage = "Refresh The Page To New Action.";
const phoneDigit = 11;
const optionFor1 = "1";
const optionFor2 = "2";
const optionFor3 = "3";
const turkish = "tr";

let phoneNumber;
let selection;
let person;

let directory = [
  { name: "cem", number: "05308975510" },
  { name: "ali", number: "05308977740" },
  { name: "mert", number: "05304561879" }
];

while (true) {
  selection = prompt(selectAnAction);

  if (selection) {
    if (selection === optionFor1) {

      person = prompt(personNameEntry);

      if (person) {

        phoneNumber = prompt(personNumberEntry);

        if (isNaN(phoneNumber) || phoneNumber.length !== phoneDigit) {
          alert(invalidNumber);
          continue;
        }

        directory.push({ name: person.toLocaleLowerCase(turkish), number: phoneNumber });
        console.log(directory);
        continue;

      } else {

        alert(invalidEntry);
        continue;
      }


    } else if (selection === optionFor2) {

      person = prompt(personNameEntry);

      if (!person) {
        alert(invalidSelection)
        continue;
      }

      person = person.toLocaleLowerCase(turkish)

      directory = directory.filter(item => item.name !== person);
      console.log(directory);
      continue;

    } else if (selection === optionFor3) {

      person = prompt(personNameEntry);

      if (!person) {
        alert(invalidSelection)
        continue;
      }

      let status = true;
      for (const item of directory) {
        if (person.toLocaleLowerCase(turkish) === item.name) {
          console.log(item);
          status = false;
          break;
        }
      }

      if (status) {
        console.log(notFound);
        break;
      }

    } else {
      alert(invalidSelection);
      continue;
    }

  } else {
    alert(noSelection);
    break;
  }

}