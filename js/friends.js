/*
    dinamically populate friends page with data coming from json
*/
function populateFriends(data) {
    const friendsIds = data.logged_user.friend_list_ids;

    const friends = data.users.filter((user) => {
        return friendsIds.indexOf(user.id) > -1;
    })
    let html = '';
    friends.forEach((friend) => {
        html += `<div class="row mt-3">
            <div class="col-2 col-xs-4">
                <img src="${friend.profile_pic}" class="img-fluid feed-pic">
            </div>
            <div class="col-10 col-xs-8 friend-data">
                <p><a href="friend-profile.html?user_id=${friend.id}">${friend.name}</a></p>
            </div>
        </div>`
    });

    document.getElementById('friendsList').innerHTML = html;
 }
 
 async function initFriendsScripts(){
     const data = await loadData();
     loadTopBarData(data);
     populateFriends(data)
 }
 
 initFriendsScripts();