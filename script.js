$(document).ready(function () {
    $("#age-form").on("submit", function (event) {
      event.preventDefault();
  
      const dob = $("#dob").val();
      if (!dob) {
        $("#result").text("Please select your date of birth.");
        return;
      }
  
      const dobDate = new Date(dob);
      const today = new Date();
  
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();
      const dayDiff = today.getDate() - dobDate.getDate();
  
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
  
      $("#result").text(age >= 0 ? `${age} years old` : "Invalid date of birth.");
    });
  });
  