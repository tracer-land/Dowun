function get(obj){
	return document.getElementById(obj);
}


//Functions start
function tab_switchProfile(){
	get('body_right_profile_section').style.display = "block";
	get('fix_position').style.display = "block";
	get('body_right_review_section').style.display = "none";
	get('body_right_photo_section').style.display = "none";
	get('body_right_friend_section').style.display = "none";
}

function tab_switchFriend(){
	get('body_right_profile_section').style.display = "none";
	get('fix_position').style.display = "block";
	get('body_right_review_section').style.display = "none";
	get('body_right_photo_section').style.display = "none";
	get('body_right_friend_section').style.display = "block";
}

function tab_switchReview(){
	get('body_right_profile_section').style.display = "none";
	get('fix_position').style.display = "block";
	get('body_right_review_section').style.display = "block";
	get('body_right_photo_section').style.display = "none";
	get('body_right_friend_section').style.display = "none";
}

function tab_switchPhoto(){
	get('body_right_profile_section').style.display = "none";
	get('fix_position').style.display = "block";
	get('body_right_review_section').style.display = "none";
	get('body_right_photo_section').style.display = "block";
	get('body_right_friend_section').style.display = "none";
}