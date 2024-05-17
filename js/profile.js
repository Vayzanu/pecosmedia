/*
    dinamically populate profile page with data coming from json
*/
function populateProfile(data) {
   const user = data.logged_user;
  
    const html = `<div class="row">
        <div class="col-md-4 col-sm-12">
            <img src="${user.profile_pic}" class="img-fluid">
        </div>
        <div class="col-md-8 col-sm-12">
            <p>Name: ${user.name}</p>
            <p>Age: ${user.age}</p>
            <p>School: ${user.school}</p>
            <p>Number of friends: ${user.friend_list_ids.length}</p>
            <p>Hobbies: ${user.hobbies.length === 0 ? 'No hobbies yet' : user.hobbies.join(', ')}</p>
        </div>
    </div>`
    
    document.getElementById('profileData').innerHTML = html;
}

async function initProfileScripts(){
    const data = await loadData();
    loadTopBarData(data);
    populateProfile(data);
}

initProfileScripts();
