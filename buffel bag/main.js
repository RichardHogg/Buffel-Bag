document.getElementById('getPersons').addEventListener('click', getPersons);
 document.getElementById('getTimes').addEventListener('click', getTimes);
 
//Attending the meeting
 function getPersons(){
     fetch('users.json')
     .then((res) => res.json())
     .then((data) => {
         let output = '<h2>Attending</h2>';
         data.forEach(function(person){
             output += `
             <ul class="list-group-item" mb-3>
                 <li class="list-group-item">ID: ${person.id}</li>
                 <li class="list-group-item">Name: ${person.name}</li>
             </ul>
             `;
         });
           document.getElementById('output').innerHTML = output;
     })
 }


 //Date & Time of Meeting
 function getTimes(){
    fetch('times.json')
    .then((res) => res.json())
    .then((data) => {
        let output2 = '<h2>Date & Time</h2>';
        data.forEach(function(time){
            output2 += `
            <ul class="card card-body" mb-3>
                <h3>Date: ${time.date}</h3>
                <li>Start times: ${time.start_times}</li>
                <li>Meeting Length: ${time.meetingLength}</li>
                <li>End times: ${time.end_times}</li>
            </ul>
            `;
        });
          document.getElementById('output2').innerHTML = output2;
    })
}












