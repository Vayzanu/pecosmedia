//populate profile data for logged user 
function loadTopBarData(data){
    document.getElementById('loggedUserImg').src = data.logged_user.profile_pic;
    document.getElementById('loggedUserName').innerText = data.logged_user.name;
}