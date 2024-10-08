
function gradingStudents(grades) {
  // Loop through all the grades
  for (let i = 0; i < grades.length; i++) {
    // Calculate the next multiple of 5
    let nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;

    // Skip grades less than 38 (failing grades)
    if (grades[i] < 38) {
      continue;
    }

    // Round the grade if the difference is less than 3
    if (nextMultipleOfFive - grades[i] < 3) {
      grades[i] = nextMultipleOfFive;
    }
  }

  return grades;
}