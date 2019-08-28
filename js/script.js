//Langaung Selection Script!
$(document).ready(function(){
	$("#language_toggle_select li span #eng").click(function(){

		$("#language_toggle_select li span #eng").addClass("selected_language");

		$("#language_toggle_select li span #mm").removeClass("selected_language");
	});

	$("#language_toggle_select li span #mm").click(function(){

		$("#language_toggle_select li span #mm").addClass("selected_language");

		$("#language_toggle_select li span #eng").removeClass("selected_language");
	});
});

//Show Map Selection Script!
$(document).ready(function(){
	$("#showmap_toggle_select li span #on").click(function(){

		$("#showmap_toggle_select li span #on").addClass("selected_map");

		$("#showmap_toggle_select li span #off").removeClass("selected_map");
	});

	$("#showmap_toggle_select li span #off").click(function(){

		$("#showmap_toggle_select li span #off").addClass("selected_map");

		$("#showmap_toggle_select li span #on").removeClass("selected_map");
	});
});

function get(obj){
	return document.getElementById(obj);
}

//Header Form Tabs Script
//Form functions start
function form_switchOne(){
	get('tab_one').style.background = "#3a9bfa";
	get('tab_one').style.color = "#fff";
	get('tab_two').style.color = "#000";
	get('tab_three').style.color = "#000";
	get('tab_two').style.background = "#fff";
	get('tab_three').style.background = "#fff";
	get('form_one').style.display = "block";
	get('form_two').style.display = "none";
	get('form_three').style.display = "none";
}

function form_switchTwo(){
	get('tab_two').style.background = "#3a9bfa";
	get('tab_two').style.color = "#fff";
	get('tab_one').style.color = "#000";
	get('tab_three').style.color = "#000";
	get('tab_one').style.background = "#fff";
	get('tab_three').style.background = "#fff";
	get('form_two').style.display = "block";
	get('form_one').style.display = "none";
	get('form_three').style.display = "none";
}

function form_switchThree(){
	get('tab_three').style.background = "#3a9bfa";
	get('tab_three').style.color = "#fff";
	get('tab_one').style.color = "#000";
	get('tab_two').style.color = "#000";
	get('tab_one').style.background = "#fff";
	get('tab_two').style.background = "#fff";
	get('form_two').style.display = "none";
	get('form_one').style.display = "none";
	get('form_three').style.display = "block";
}


//Body Category Tabs Script!
//How One functions start!
function work_switchOne(){
	get('how_works_one').style.background = "#3a9bfa";
	get('how_works_one').style.color = "#fff";
	get('how_works_two').style.color = "#000";
	get('how_works_three').style.color = "#000";
	get('how_works_two').style.background = "#fff";
	get('how_works_three').style.background = "#fff";
	get('how_works_panel_one').style.display = "block";
	get('how_works_panel_two').style.display = "none";
	get('how_works_panel_three').style.display = "none";
}

function work_switchTwo(){
	get('how_works_two').style.background = "#3a9bfa";
	get('how_works_two').style.color = "#fff";
	get('how_works_one').style.color = "#000";
	get('how_works_three').style.color = "#000";
	get('how_works_one').style.background = "#fff";
	get('how_works_three').style.background = "#fff";
	get('how_works_panel_one').style.display = "none";
	get('how_works_panel_two').style.display = "block";
	get('how_works_panel_three').style.display = "none";
}

function work_switchThree(){
	get('how_works_three').style.background = "#3a9bfa";
	get('how_works_three').style.color = "#fff";
	get('how_works_two').style.color = "#000";
	get('how_works_one').style.color = "#000";
	get('how_works_two').style.background = "#fff";
	get('how_works_one').style.background = "#fff";
	get('how_works_panel_one').style.display = "none";
	get('how_works_panel_two').style.display = "none";
	get('how_works_panel_three').style.display = "block";
}

//How Two functions start!
function jobs_switchOne(){
	get('how_jobs_one').style.background = "#3a9bfa";
	get('how_jobs_one').style.color = "#fff";
	get('how_jobs_two').style.color = "#000";
	get('how_jobs_three').style.color = "#000";
	get('how_jobs_two').style.background = "#fff";
	get('how_jobs_three').style.background = "#fff";
	get('how_jobs_panel_one').style.display = "block";
	get('how_jobs_panel_two').style.display = "none";
	get('how_jobs_panel_three').style.display = "none";
}

function jobs_switchTwo(){
	get('how_jobs_two').style.background = "#3a9bfa";
	get('how_jobs_two').style.color = "#fff";
	get('how_jobs_one').style.color = "#000";
	get('how_jobs_three').style.color = "#000";
	get('how_jobs_one').style.background = "#fff";
	get('how_jobs_three').style.background = "#fff";
	get('how_jobs_panel_one').style.display = "none";
	get('how_jobs_panel_two').style.display = "block";
	get('how_jobs_panel_three').style.display = "none";
}

function jobs_switchThree(){
	get('how_jobs_three').style.background = "#3a9bfa";
	get('how_jobs_three').style.color = "#fff";
	get('how_jobs_two').style.color = "#000";
	get('how_jobs_one').style.color = "#000";
	get('how_jobs_two').style.background = "#fff";
	get('how_jobs_one').style.background = "#fff";
	get('how_jobs_panel_one').style.display = "none";
	get('how_jobs_panel_two').style.display = "none";
	get('how_jobs_panel_three').style.display = "block";
}


//How Three functions start!
function page_switchOne(){
	get('how_page_one').style.background = "#3a9bfa";
	get('how_page_one').style.color = "#fff";
	get('how_page_two').style.color = "#000";
	get('how_page_three').style.color = "#000";
	get('how_page_two').style.background = "#fff";
	get('how_page_three').style.background = "#fff";
	get('how_page_panel_one').style.display = "block";
	get('how_page_panel_two').style.display = "none";
	get('how_page_panel_three').style.display = "none";
}

function page_switchTwo(){
	get('how_page_two').style.background = "#3a9bfa";
	get('how_page_two').style.color = "#fff";
	get('how_page_one').style.color = "#000";
	get('how_page_three').style.color = "#000";
	get('how_page_one').style.background = "#fff";
	get('how_page_three').style.background = "#fff";
	get('how_page_panel_one').style.display = "none";
	get('how_page_panel_two').style.display = "block";
	get('how_page_panel_three').style.display = "none";
}

function page_switchThree(){
	get('how_page_three').style.background = "#3a9bfa";
	get('how_page_three').style.color = "#fff";
	get('how_page_two').style.color = "#000";
	get('how_page_one').style.color = "#000";
	get('how_page_two').style.background = "#fff";
	get('how_page_one').style.background = "#fff";
	get('how_page_panel_one').style.display = "none";
	get('how_page_panel_two').style.display = "none";
	get('how_page_panel_three').style.display = "block";
}

