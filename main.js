
function information(){
 
    var year=document.getElementById("yearInput").value; 
    var month=document.getElementById("monthInput").value; 
    var day=document.getElementById("dayInput").value; 

   
    var male=document.getElementById("maleInput").checked;
    var female=document.getElementById("femaleInput").checked;

   
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
   
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 

   
    var birthDate = new Date(day+ '/' +month + '/' + year);
    var dayOfTheWeek = birthDate.getDay(); 

    //VALIDATION OF THE FORM

    if (day <= 0 || day > 31) { 
		document.getElementById("error-text").innerText = "Please enter a valid date!"
    }

    //ensures user enters a date and validates date entered for months with 30 days

    else if ((month === "September" || month === "April" || month === "June" || month === "November") && (day <= 0 || day > 30)) { 
        document.getElementById("error-text").innerText = "Please enter a valid date!"
    }

    //setting valid dates of a leap year testing that the year is evenly divisible by 4
    else if ((month === "February") && (day <= 0 || day > 29) && (year %4 ==0)) {
		document.getElementById("error-text").innerText = "Please enter a valid date!"
    }


    //setting valid dates of a normal year on Feb testing that the year is  not evenly divisible by 4
    else if ((month === "February") && (day <= 0 || day > 28) && (year %4 !=0)) {
		document.getElementById("error-text").innerText = "Please enter a valid date!"

    }

     //ensures user selects a month
    else if (month === "------") {
		document.getElementById("error-text").innerText = "Please select a month!"
    }

    //ensures user enters a year and the year entered is valid and doesn't exceed 2022
    else if (year <= 0 || year > 2022) { 
        document.getElementById("error-text").innerText = "Please enter a valid year!" // replacing the please enter valid dates with the id error-text
    }
    
   else if ((female === false) && (male === false)) { 
    document.getElementById("error-text").innerText = "Please select gender!"

 }
//AFTER FORM VALIDATION

    //Male
    else if (male === true) { 
        document.getElementById("displayName").innerHTML = "You were born on a " + days[dayOfTheWeek] + ". " + " Your Akan name is " + maleNames[dayOfTheWeek] + "!"
    }

    //Female
    else if (female === true) { 
        document.getElementById("displayName").innerHTML = "You were born on a " + days[dayOfTheWeek] + "." + " Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    }      

     


}
//reset button function using the reset method
function click(){
document.getElementById("reset").reset();}
