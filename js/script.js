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


function get(obj){
	return document.getElementById(obj);
}

//Header Form Tabs Script
//Form jobs functions start
function form_switchJobs(){
	get('form_jobs_tab').style.background = "#3a9bfa";
	get('form_jobs_tab').style.color = "#fff";
	get('form_place_tab').style.color = "#000";
	get('form_flatmate_tab').style.color = "#000";
	get('form_place_tab').style.background = "#fff";
	get('form_flatmate_tab').style.background = "#fff";
	get('form_jobs').style.display = "block";
	get('form_place').style.display = "none";
	get('form_flatmate').style.display = "none";
}

function form_switchPlace(){
	get('form_place_tab').style.background = "#3a9bfa";
	get('form_place_tab').style.color = "#fff";
	get('form_jobs_tab').style.color = "#000";
	get('form_flatmate_tab').style.color = "#000";
	get('form_jobs_tab').style.background = "#fff";
	get('form_flatmate_tab').style.background = "#fff";
	get('form_place').style.display = "block";
	get('form_jobs').style.display = "none";
	get('form_flatmate').style.display = "none";
}

function form_switchFlatmate(){
	get('form_flatmate_tab').style.background = "#3a9bfa";
	get('form_flatmate_tab').style.color = "#fff";
	get('form_jobs_tab').style.color = "#000";
	get('form_place_tab').style.color = "#000";
	get('form_jobs_tab').style.background = "#fff";
	get('form_place_tab').style.background = "#fff";
	get('form_place').style.display = "none";
	get('form_jobs').style.display = "none";
	get('form_flatmate').style.display = "block";
}


//Body Category Tabs Script!
//How works functions start!
function work_switchPlace(){
	get('how_works_place').style.background = "#3a9bfa";
	get('how_works_place').style.color = "#fff";
	get('how_works_jobs').style.color = "#000";
	get('how_works_flatmate').style.color = "#000";
	get('how_works_jobs').style.background = "#fff";
	get('how_works_flatmate').style.background = "#fff";
	get('how_works_panel_place').style.display = "block";
	get('how_works_panel_jobs').style.display = "none";
	get('how_works_panel_flatmate').style.display = "none";
}

function work_switchJobs(){
	get('how_works_jobs').style.background = "#3a9bfa";
	get('how_works_jobs').style.color = "#fff";
	get('how_works_place').style.color = "#000";
	get('how_works_flatmate').style.color = "#000";
	get('how_works_place').style.background = "#fff";
	get('how_works_flatmate').style.background = "#fff";
	get('how_works_panel_place').style.display = "none";
	get('how_works_panel_jobs').style.display = "block";
	get('how_works_panel_flatmate').style.display = "none";
}

function work_switchFlatmate(){
	get('how_works_flatmate').style.background = "#3a9bfa";
	get('how_works_flatmate').style.color = "#fff";
	get('how_works_jobs').style.color = "#000";
	get('how_works_place').style.color = "#000";
	get('how_works_jobs').style.background = "#fff";
	get('how_works_place').style.background = "#fff";
	get('how_works_panel_place').style.display = "none";
	get('how_works_panel_jobs').style.display = "none";
	get('how_works_panel_flatmate').style.display = "block";
}

//How Jobs functions start!
function jobs_switchPlace(){
	get('how_jobs_place').style.background = "#3a9bfa";
	get('how_jobs_place').style.color = "#fff";
	get('how_jobs_jobs').style.color = "#000";
	get('how_jobs_flatmate').style.color = "#000";
	get('how_jobs_jobs').style.background = "#fff";
	get('how_jobs_flatmate').style.background = "#fff";
	get('how_jobs_panel_place').style.display = "block";
	get('how_jobs_panel_jobs').style.display = "none";
	get('how_jobs_panel_flatmate').style.display = "none";
}

function jobs_switchJobs(){
	get('how_jobs_jobs').style.background = "#3a9bfa";
	get('how_jobs_jobs').style.color = "#fff";
	get('how_jobs_place').style.color = "#000";
	get('how_jobs_flatmate').style.color = "#000";
	get('how_jobs_place').style.background = "#fff";
	get('how_jobs_flatmate').style.background = "#fff";
	get('how_jobs_panel_place').style.display = "none";
	get('how_jobs_panel_jobs').style.display = "block";
	get('how_jobs_panel_flatmate').style.display = "none";
}

function jobs_switchFlatmate(){
	get('how_jobs_flatmate').style.background = "#3a9bfa";
	get('how_jobs_flatmate').style.color = "#fff";
	get('how_jobs_jobs').style.color = "#000";
	get('how_jobs_place').style.color = "#000";
	get('how_jobs_jobs').style.background = "#fff";
	get('how_jobs_place').style.background = "#fff";
	get('how_jobs_panel_place').style.display = "none";
	get('how_jobs_panel_jobs').style.display = "none";
	get('how_jobs_panel_flatmate').style.display = "block";
}


//How Page functions start!
function page_switchPlace(){
	get('how_page_place').style.background = "#3a9bfa";
	get('how_page_place').style.color = "#fff";
	get('how_page_jobs').style.color = "#000";
	get('how_page_flatmate').style.color = "#000";
	get('how_page_jobs').style.background = "#fff";
	get('how_page_flatmate').style.background = "#fff";
	get('how_page_panel_place').style.display = "block";
	get('how_page_panel_jobs').style.display = "none";
	get('how_page_panel_flatmate').style.display = "none";
}

function page_switchJobs(){
	get('how_page_jobs').style.background = "#3a9bfa";
	get('how_page_jobs').style.color = "#fff";
	get('how_page_place').style.color = "#000";
	get('how_page_flatmate').style.color = "#000";
	get('how_page_place').style.background = "#fff";
	get('how_page_flatmate').style.background = "#fff";
	get('how_page_panel_place').style.display = "none";
	get('how_page_panel_jobs').style.display = "block";
	get('how_page_panel_flatmate').style.display = "none";
}

function page_switchFlatmate(){
	get('how_page_flatmate').style.background = "#3a9bfa";
	get('how_page_flatmate').style.color = "#fff";
	get('how_page_jobs').style.color = "#000";
	get('how_page_place').style.color = "#000";
	get('how_page_jobs').style.background = "#fff";
	get('how_page_place').style.background = "#fff";
	get('how_page_panel_place').style.display = "none";
	get('how_page_panel_jobs').style.display = "none";
	get('how_page_panel_flatmate').style.display = "block";
}