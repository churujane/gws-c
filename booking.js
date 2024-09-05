const bookbutton = document.getElementById("bookbutton");
const namebox = document.getElementById("namebox");
const phonenumberbox = document.getElementById("phonenumberbox");
const emailbox = document.getElementById("emailbox");
const hometownbox = document.getElementById("hometownbox");
const malebox = document.getElementById("malebox");
const femalebox = document.getElementById("femalebox");
const entrydatebox = document.getElementById("entrydatebox");
const numberofpeoplebox = document.getElementById("numberofpeoplebox");
const sitebox = document.getElementById("sitebox");
const packagebox = document.getElementById("packagebox");
const numberofdaysbox = document.getElementById("numberofdaysbox");
const bookedokbutton = document.getElementById("bookedokbutton");
const amountdisplay = document.getElementById("amountdisplay");
const bookingdetails = document.getElementById("bookingdetails");

const namedisplay = document.getElementById("namedisplay");
const phonenumberdisplay = document.getElementById("phonenumberdisplay");
const emaildisplay = document.getElementById("emaildisplay");
const hometowndisplay = document.getElementById("hometowndisplay");
const genderdisplay = document.getElementById("genderdisplay");
const entrydatedisplay = document.getElementById("entrydatedisplay");
const numberofpeopledisplay = document.getElementById("numberofpeopledisplay");
const sitedisplay = document.getElementById("sitedisplay");
const numberofdaysdisplay = document.getElementById("numberofdaysdisplay");
const packagedisplay = document.getElementById("packagedisplay");
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
})



const confirmdetails = document.getElementById("confirmdetails");
const canceldetailsbutton = document.getElementById('canceldetailsbutton');
const confirmdetailsbutton = document.getElementById('confirmdetailsbutton');
const ticketdisplay = document.getElementById("ticketdisplay");

let amount = 12000;

bookbutton.addEventListener("click", function(){
    confirmdetails.style = "display: block";

    const name = namebox.value;
    const phonenumber = phonenumberbox.value;
    const email = emailbox.value;
    const hometown = hometownbox.value;
    const entrydate = new Date(entrydatebox.value);
    const numberofpeople = numberofdaysbox.value;
    const sitename = sitebox.value;
    const packagename = packagebox.value;
    const numberofdays = numberofdaysbox.value;

    namedisplay.innerHTML = name;
    phonenumberdisplay.innerHTML = phonenumber;
    emaildisplay.innerHTML = email;
    hometowndisplay.innerHTML = hometown;
    entrydatedisplay.innerHTML = entrydate;
    numberofpeopledisplay.innerHTML = numberofpeople;
    sitedisplay.innerHTML = sitename;
    packagedisplay.innerHTML = packagename;
    numberofdaysdisplay.innerHTML = numberofdays;

    numberofpeople = parseInt(numberofpeople);
numberofdays = parseInt(numberofdays);


    function getAmount()
    {

    if (packagebox.value == "basic")
    {
        amount = 4000 * numberofpeople * numberofdays;
    }
    else if(packagebox.value == "standard")
    {
        amount = 6000 * numberofpeople * numberofdays;
    }
    else
    {
        amount = 8000 * numberofpeople * numberofdays;
    }

    }

});



canceldetailsbutton.addEventListener("click", function(){
    confirmdetails.style = "display: none";
});

confirmdetailsbutton.addEventListener("click", function(){
    bookingdetails.style.display = "block";
    alert("Booked successfully!");
    confirmdetails.style = "display: none";

    ticketdisplay.innerHTML = Math.round(100000*Math.random());
    amountdisplay.innerHTML = amount;
    

});

bookedokbutton.addEventListener("click", function(){
    bookingdetails.style = "display: none";
});



