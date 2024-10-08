function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  // Step 1: Calculate class average
  const classAverage = getAverage(totalScores);
  
  // Step 2: Get the student's grade
  const studentGrade = getGrade(studentScore);
  
  // Step 3: Check if the student passed or failed based on the class average
  const passed = studentScore >= classAverage;
  
  // Step 4: Build and return the appropriate message
  let message = "Class average: " + classAverage + ". Your grade: " + studentGrade + ". ";
  
  if (passed) {
    message += "You passed the course.";
  } else {
    message += "You failed the course.";
  }
  
  return message;
}

