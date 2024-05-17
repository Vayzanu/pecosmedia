//populate data for logged user feed
function loadFeed(data){
    
    const activity = data.activity;
    const friends = data.logged_user.friend_list_ids;
    const users = data.users;

    //filter data to get the activity of users who are friends with the logged user
    const filteredActivity = activity.filter((data) => {
        return friends.indexOf(data.user_id) > -1;
    });
    let html = '';
    /*
        for each activity of users that are friends with the logged profile
        get the user image and name from the users data
        and get the user activity from filteredActivity
        and generate the html to populate the feed
    */
    for(let i = 0, len = filteredActivity.length; i < len; i++){
        const currentActivity = filteredActivity[i];
        let friendPic = '';
        let friendName = '';
        let friendId = '';
        users.forEach((user) =>{
            if(currentActivity.user_id === user.id){
                friendPic = user.profile_pic;
                friendName = user.name;
                friendId = user.id;
            }
        })
        html += ` <div class="card-body mt-3">
            <div class="row no-gutters align-items-center">
                <div class="col-3">
                    <img class="img-fluid feed-pic" src="${friendPic}" />
                </div>
                <div class="col-9">
                    <p><a href="friend-profile.html?user_id=${friendId}" class="link">${friendName}</a>: ${currentActivity.activity}</p>
                </div>
            </div>
            ${i < len - 1 ? '<hr>' : ''}
        </div>`;
    };
    //append the generated html in the are related to the feed
    document.getElementById('activityWall').innerHTML = html;
}
/**
 * Function to initiate all home page functionality upon page load
 */
async function initHomePage(){
    const data = await loadData();
    loadTopBarData(data);
    loadFeed(data);
}




initHomePage();