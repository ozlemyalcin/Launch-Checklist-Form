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

   let URL="https://handlers.education.launchcode.org/static/planets.json";
   fetch(URL).then(function(response){
      response.json().then(function(json){
         const missionTarget=document.getElementById("missionTarget");
   
         //missionTarget.addEventListener("load",function(){
            missionTarget.innerHTML=`
            
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}"></img>
            
            `;
            
         //});

      });
   });



   let form= document.getElementById("launchForm");
   form.addEventListener("submit",function(event){
      let pilotName= document.querySelector("input[name=pilotName]");
      let copilotName=document.querySelector("input[name=copilotName]");
      let fuelLevel=document.querySelector("input[name=fuelLevel]");
      let cargoMass=document.querySelector("input[name=cargoMass]");

      if (pilotName.value ==="" || copilotName.value==="" || fuelLevel.value==="" || cargoMass.value===""){
         alert("All fields are required!");
         event.preventDefault();
      }else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)|| isNaN(fuelLevel.value)|| isNaN(cargoMass.value)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }else {

         pilotStatus.innerHTML= `Pilot name: ${pilotName} `
         copilotName.innerHTML = `Co-pilot: ${copilotName}`
         fuelLevel.innerHTML=`Fuel level: ${fuelLevel}`
         cargoMass.innerHTML=`Cargo Mass: ${cargoMass}`
         let newFaultyItems=document.getElementById("faultyItems");
         let newLaunchStatus=document.getElementById("launchStatus");
         let newPilotStatus=document.getElementById("pilotStatus");
         let newCopilotStatus=document.getElementById("copilotStatus");
         let newFuelStatus=document.getElementById("fuelStatus");
         let newCargoStatus=document.getElementById("cargoStatus");
      
         if(fuelLevel.value<10000){
            newFaultyItems.style.visibility="visible";
            newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
            newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch`
            newFuelStatus.innerHTML="Fuel level is not enough fuel for the journey";
            newLaunchStatus.innerHTML="Shuttle not ready for launch";
            newLaunchStatus.style.color="red";
            //event.preventDefault();
         
         
         
         
         }else if(fuelLevel.value>=10000){
            newFaultyItems.style.visibility="visible";
            newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
            newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch`
            newFuelStatus.innerHTML="Fuel level is  enough fuel for the journey";
            newLaunchStatus.innerHTML="Shuttle ready for launch";
            newLaunchStatus.style.color="green";
            //event.preventDefault();
      
      
         
         
         }
         if(cargoMass.value>10000){
            newFaultyItems.style.visibility="visible";
            newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
            newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready foor launch`
            newCargoStatus.innerHTML="Cargo mass is too much mass for the shuttle to take of";
            newLaunchStatus.innerHTML="Shuttle Not Ready for Launch";
            newLaunchStatus.style.color="red";
            //event.preventDefault();
      
      
         }else if(cargoMass.value<=10000){
            newFaultyItems.style.visibility="visible";
            newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
            newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready foor launch`
            newCargoStatus.innerHTML="Cargo mass is low enough for the shuttle to take of";
            newLaunchStatus.innerHTML="Shuttle Not Ready for Launch";
            newLaunchStatus.style.color="red";
            //event.preventDefault();
      
      
         
         }
         if (fuelLevel.value > 10000 && cargoMass.value < 10000){
            newFaultyItems.style.visibility="visible";
            newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
            newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch`
            newLaunchStatus.innerHTML="Shuttle is Ready for Launch";
            newLaunchStatus.style.color="green";
            //event.preventDefault();
         }else{
            newFaultyItems.style.visibility="visible";
            newPilotStatus.innerHTML=`Pilot ${pilotName.value} is ready for launch`
            newCopilotStatus.innerHTML=`Co-pilot ${copilotName.value} is ready for launch`
            newLaunchStatus.innerHTML="Shuttle is Not for Launch";
            newLaunchStatus.style.color="red";
            //event.preventDefault();
      
         };
     
      };


     

      event.preventDefault();

   });

});
