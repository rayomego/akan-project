const day = document.getElementById('day')
const month = document.getElementById('month');
const year = document.getElementById('year');
const genderMale = document.getElementById("rad1")
const output = document.getElementById("output");
const btnSubmit = document.getElementById('submit')
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
btnSubmit.addEventListener('click', function(e){
    e.preventDefault()
    //get the date string
    const date = `${month.value}-${day.value}-${year.value}`
    //change the date string to an actual date object
    const finalDate = new Date(date)
    const actualDay = finalDate.getDay()
    if(genderMale.checked == true){
  akanName = male[actualDay]
    }else {
  akanName = female[actualDay]
    }
   output.innerText = `Your akan name is ${akanName}`
})