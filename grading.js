function getGrade(marks) {
    if (marks >= 0 && marks <= 100) {
      if (marks >= 79) {
        return "A";
      } else if (marks >= 60 && marks < 79) {
        return "B";
      } else if (marks >= 59 && marks < 60) {
        return "C";
      } else if (marks >= 40 && marks < 59) {
        return "D";
      } else {
        return "E";
      }
    } else {
      return "Invalid input";
    }
  }
  
  console.log(getGrade());
