/*
    dinamically populate profile page with data coming from json
*/
function populateProfile(data) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = parseInt(urlParams.get('user_id'));

    

   const users = data.users;

   let friend = {};
   users.forEach((user) => {
        if(id === user.id){
            friend = user;
        }
   });
 
    const html = `<div class="row">
        <div class="col-md-4 col-sm-12">
            <img src="${friend.profile_pic}" class="img-fluid">
        </div>
        <div class="col-md-8 col-sm-12">
            <p>Age: ${friend.age}</p>
            <p>School: ${friend.school}</p>
            <p>Hobbies: ${friend.hobbies.length === 0 ? 'No hobbies yet' : friend.hobbies.join(', ')}</p>
        </div>
    </div>`
    
    document.getElementById('profileData').innerHTML = html;
    document.getElementById('friendName').innerHTML = friend.name;
    
}

async function initProfileScripts(){
    const data = await loadData();
    loadTopBarData(data);
    populateProfile(data);
}

initProfileScripts();
