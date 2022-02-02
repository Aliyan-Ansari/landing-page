function setdate(){
    let dt = new Date();
    let year = dt.getFullYear();
    let month = dt.getMonth() + 1;
    nextdt = String(dt.getDate() + 1).padStart(2,'0');
    let today = String(dt.getDate()).padStart(2,'0');
    let fulldate = year + '-' + month + '-' + today;
    let nextday = year + '-' + month + '-' + (nextdt) ;
    // console.log(fulldate);
   document.getElementById("datetime").value = fulldate;
   document.getElementById("datetime2").value = nextday;

}
