// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


window.addEventListener("load", function(){

   let form= document.getElementById("launchForm");
   form.addEventListener("submit",function(event){
      let pilotName= document.querySelector("input[name=pilotName]");
      let copilotName=document.querySelector("input[name=copilotName]");
      let fuelLevel=document.querySelector("input[name=fuelLevel]");
      let cargoMass=document.querySelector("input[name=cargoMass]");

      if (pilotName.value ==="" || copilotName.value==="" || fuelLevel.value==="" || cargoMass.value===""){
         alert("All fields are required!");
         event.preventDefault();
      };
      if (isNaN(pilotName.value)=== false || isNaN(copilotName.value)===false || isNaN(fuelLevel.value)===true || isNaN(cargoMass.value)===true){
         alert("Please enter valid information for each field!");
         event.preventDefault();
      };

   let newFaultyItems=document.getElementById("faultyItems");
   let newLaunchStatus=document.getElementById("launchStatus");
   let newPilotStatus=document.getElementById("pilotStatus");
   let newCopilotStatus=document.getElementById("copilotStatus");
   let newFuelStatus=document.getElementById("fuelStatus");
   let newCargoStatus=document.getElementById("cargoStatus");

   if(fuelLevel.value<10000){
      newFaultyItems.style.visibility="visible";
      newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
      newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready foor launch`
      newFuelStatus.innerHTML="Fuel level is not enough fuel for the journey";
      newLaunchStatus.innerHTML="shuttle not ready for launch";
      newLaunchStatus.style.color="red";
      event.preventDefault();

   }else if(cargoMass.value>10000){
      newFaultyItems.style.visibility="visible";
      newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
      newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready foor launch`
      newCargoStatus.innerHTML="Cargo mass is too much mass for the shuttle to take of";
      newLaunchStatus.innerHTML="Shuttle Not Ready for Launch";
      newLaunchStatus.style.color="red";
      event.preventDefault();


   }else{
      newFaultyItems.style.visibility="visible";
      newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
      newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch`
      newLaunchStatus.innerHTML="Shuttle is Ready for Launch";
      newLaunchStatus.style.color="green";
   event.preventDefault();
   }

   });


});