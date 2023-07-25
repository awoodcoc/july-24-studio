// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data) {
            console.log(data.length);
            const container = document.getElementById("container");
            console.log(data[0].firstName);
            console.log(data[6].skills);
            console.log(data.skills)
            data.sort(function(a,b) {return a.hoursInSpace - b.hoursInSpace})
            data.map(({firstName, lastName, hoursInSpace, active, skills, picture}) => {
                let activeCSS = active ? "active" : "nonActive";
                return container.innerHTML += `
                <div class ="astronaut">
                    <div class ="bio">
                        <h3>${firstName} ${lastName}</h3>
                        <ul>
                            <li>Hours in space: ${hoursInSpace}</li>
                            <li class = "${activeCSS}">Active: ${active}</li>
                            <li>Skills: ${skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${picture}">
                </div>
                `
            }) 
            // for (let i = 0; i < data.length; i++) {

            //     let active = data[i].active ? "active" : "";
            //     container.innerHTML += `
            //     <div class ="astronaut">
            //         <div class ="bio">
            //             <h3>${data[i].firstName} ${data[i].lastName}</h3>
            //             <ul>
            //                 <li>Hours in space: ${data[i].hoursInSpace}</li>
            //                 <li class = "${active}">Active: ${data[i].active}</li>
            //                 <li>Skills: ${data[i].skills.join(', ')}</li>
            //             </ul>
            //         </div>
            //         <img class="avatar" src="${data[i].picture}">
            //     </div>
            //     `
            // }

            const end = document.getElementById("end");
            end.innerHTML = `We have ${data.length} astronauts on this webpage, babey!`

        });

    });

});

