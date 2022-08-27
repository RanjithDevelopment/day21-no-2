async function isrodetails() {
    try{
    //here i get the userinput from the form elements and store in the variable userinput
    let userinput = document.querySelector(".inputfields").value;
    
    //  here i check the user given value is first end point or not
    if (userinput === 'spacecrafts') {
        let baseurl1 = `https://isro.vercel.app/api/${userinput}`;
        let res = await fetch(baseurl1);
        //here i convert the result in json format to display on webpage
        let result1 = await res.json();
        //the result in object form so i use for in loop
        for (var key in result1) {
            let arr = result1[key];
            //inside the objects all the details are in side the array so i use for loop to fetch all the data
            for (var i = 0; i <= arr.length-1; i++) {
              
                var resultcontainer1=document.createElement("div");
                resultcontainer1.setAttribute("class","spacecraftsdetails");
                resultcontainer1.innerHTML=`<div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">Spacecrafts Details</h5>
                  <p class="card-text">ID OF SPACECRAFT:  ${arr[i].id}</p>
                  <p class="card-text">NAME:  ${arr[i].name}</p>
                </div>
              </div>`;
              var a=document.querySelector(".container");
              a.append(resultcontainer1);
            }
        }
    }
   //  here i check the user given value is second end point or not
    if (userinput === 'launchers') {
        let baseurl2 = `https://isro.vercel.app/api/${userinput}`;
        let res1 = await fetch(baseurl2);
        //here i convert the result in json format to display on webpage
        let result2 = await res1.json();
             //the result in object form so i use for in loop
        for (var keys in result2) {
            let array = result2[keys];
 //inside the objects all the details are in side the array so i use for loop to fetch all the data
            for (var j = 0; j <= array.length-1; j++) {
                
              
                var resultcontainer2=document.createElement("div");
                resultcontainer2.setAttribute("class","spacecraftsdetails");
                resultcontainer2.innerHTML=`<div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">Launcher Details</h5>
                  <hr>
                  <p class="card-text">LAUNCHER:  ${array[j].id}</p>
                
                </div>
              </div>`;
              var b=document.querySelector(".container");
              b.append(resultcontainer2);
            }
        }
    }
    }catch(error){
        alert(error);
    }
}