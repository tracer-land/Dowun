$(document).ready(function(){

				/*Help Slide Text!*/
				$("#body_right_help_section .help_section .help_section_text ul span").click(function(){
					$(this).next("div").slideToggle();
				});

				/*Slide Toggle Start!!!*/
				$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #lg-section .lg-tab").click(function(){
					$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #lg-section .lg-toggle").slideToggle();
				});

				$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #skill-section .skill-tab").click(function(){
					$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #skill-section .skill-toggle").slideToggle();
				});

				$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #education-section .edu-tab").click(function(){
					$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #education-section .edu-toggle").slideToggle();
				});

				$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #experience-section .exp-tab").click(function(){
					$("#body .container-fluid .col-md-10 .my_cv .tab-section #education-work #experience-section .exp-toggle").slideToggle();
				});

				$("#body .container-fluid .col-md-10 .my_cv .tab-section #about-me #interest-position .position-tab").click(function(){
					$("#body .container-fluid .col-md-10 .my_cv .tab-section #about-me #interest-position .position-toggle").slideToggle();
				});

				$("#body .container-fluid .col-md-10 .my_cv .tab-section #about-me #interest-area .area-tab").click(function(){
					$("#body .container-fluid .col-md-10 .my_cv .tab-section #about-me #interest-area .area-toggle").slideToggle();
				});
				/*Slide Toggle End!!!*/	


				/*Caret!*/	
				$("#sub_nav ul li a").click(function(){
					$("#sub_nav ul li span").removeClass("caret");
					$("#sub_nav ul li span").addClass("caret");
				});

				/*Caret Script!*/
				$("#second-ul li a").click(function(){
					$("#second-ul li a span").toggleClass("caret");
				});

				/*Setting Slide Toggle Start!!!*/
				$("#body_right_setting_section .table_section .my_setting .tab-section #login .password-tab").click(function(){
					$("#body_right_setting_section .table_section .my_setting .tab-section #login .password-toggle").slideToggle();
				});

				$("#body_right_setting_section .table_section .my_setting .tab-section #login .email-tab").click(function(){
					$("#body_right_setting_section .table_section .my_setting .tab-section #login .email-toggle").slideToggle();
				});

				$("#body_right_setting_section .table_section .my_setting .tab-section #login .phone-tab").click(function(){
					$("#body_right_setting_section .table_section .my_setting .tab-section #login .phone-toggle").slideToggle();
				});


				/*Flatmate Tab Title Active*/
				$("#body_right_flatmate_section .flatmate_section #tab-title li").click(function(){
					$("#body_right_flatmate_section .flatmate_section #tab-title li").removeClass("active-tab-title");
					$(this).addClass("active-tab-title");
				});

				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #me-section .section-footer button").click(function(){
					$("#body_right_flatmate_section .flatmate_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_flatmate_section .flatmate_section #tab-title #placetype").addClass("active-tab-title");
				});
				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #couple-section .section-footer button").click(function(){
					$("#body_right_flatmate_section .flatmate_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_flatmate_section .flatmate_section #tab-title #placetype").addClass("active-tab-title");
				});
				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #group-section .section-footer button").click(function(){
					$("#body_right_flatmate_section .flatmate_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_flatmate_section .flatmate_section #tab-title #placetype").addClass("active-tab-title");
				});

				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-row-1 .section-footer button").click(function(){
					$("#body_right_flatmate_section .flatmate_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_flatmate_section .flatmate_section #tab-title #location").addClass("active-tab-title");
				});

				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-3 #flatmate-tab-3-row-1 .section-footer button").click(function(){
					$("#body_right_flatmate_section .flatmate_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_flatmate_section .flatmate_section #tab-title #aboutus").addClass("active-tab-title");
				});


				var max_form = 7;
				var wrapper = $(".add-form-wrap");
				var add_button = $(".add-form-btn");

				var x = 1;


				$(add_button).click(function(e){
					e.preventDefault();
					if(x<max_form){
						x++;
						$(wrapper).append('<div style="clear:both;"><form action="#"><div class="col-md-8"><label for="name">Your Friend Name</label><input type="text" name="name" placeholder="Enter Your Friend Name" class="form-control" required></div><div class="col-md-4"><label for="age">Your Friend Age</label><input type="text" name="age" placeholder="Enter Your Friend Age" class="form-control" required></div><div class="col-md-12" style="padding: 0px;"><label style="display: block;">Gender</label><label class="gender"><i class="fa fa-male"></i><span>Male</span><input type="radio" name="gender" value="male" required checked><em class="fa fa-check-circle" id="male-check"></em></label><label class="gender"><i class="fa fa-female"></i><span>Female</span><input type="radio" name="gender" value="female" required><em class="fa fa-check-circle" id="female-check"></em></label></div></form><a href="#" class="btn btn-sm btn-danger pull-right remove_form" style="display:block;">Remove</a></div>');
					}
				});
				//Remove Form
				$(wrapper).on("click",".remove_form", function(e){
					e.preventDefault(); $(this).parent('div').remove(); x--;
				});

			});

			/*Functions!!!*/
				function get(obj){
					return document.getElementById(obj);
				}

				function tab_switchMycv(){
					get('body_right_job_section').style.display = "none";
					get('body_right_setting_section').style.display = "none";
					get('body_right_help_section').style.display = "none";
					get('body_right_schedule_section').style.display = "none";
					get('my-cv-section').style.display = "block";
					get('body_right_home_section').style.display = "block";
					get('body_right_flatmate_section').style.display = "none";
					get('fix_position').style.display = "block";
				}

				function tab_switchFlatmate(){
					get('body_right_flatmate_section').style.display = "block";
					get('body_right_help_section').style.display = "none";
					get('flatmate_section').style.display = "none";
					get('flatmate_table_section').style.display = "block";
					get('body_right_home_section').style.display = "none";
					get('my-cv-section').style.display = "none";
					get('body_right_setting_section').style.display = "none";
					get('body_right_schedule_section').style.display = "none";
					get('body_right_job_section').style.display = "none";
					get('body_right_flatmate_section').style.display = "block";
					get('fix_position').style.display = "block";
					get('body_right_flatmate_section').style.position = "static";
					get('body_right_flatmate_section').style.left = "0%";
					get('body_right_flatmate_section').style.right = "0%";
					get('body_right_flatmate_section').style.transform = "translate(0%, 0%)";
				}

				function tab_switchJobapply(){
					get('body_right_home_section').style.display = "none";
					get('body_right_help_section').style.display = "none";
					get('my-cv-section').style.display = "none";
					get('body_right_setting_section').style.display = "none";
					get('body_right_schedule_section').style.display = "none";
					get('body_right_job_section').style.display = "block";
					get('body_right_flatmate_section').style.display = "none";
					get('fix_position').style.display = "block";
					get('body_right_job_section').style.position = "static";
					get('body_right_job_section').style.left = "0%";
					get('body_right_job_section').style.right = "0%";
					get('body_right_job_section').style.transform = "translate(0%, 0%)";
				}

				function tab_switchMyschedule(){
					get('body_right_schedule_section').style.display = "block";
					get('body_right_help_section').style.display = "none";
					get('body_right_home_section').style.display = "none";
					get('body_right_setting_section').style.display = "none";
					get('my-cv-section').style.display = "none";
					get('body_right_job_section').style.display = "none";
					get('body_right_flatmate_section').style.display = "none";
					get('fix_position').style.display = "block";
					get('body_right_schedule_section').style.position = "static";
					get('body_right_schedule_section').style.left = "0%";
					get('body_right_schedule_section').style.right = "0%";
					get('body_right_schedule_section').style.transform = "translate(0%, 0%)";
				}

				function tab_switchHelp(){
					get('body_right_help_section').style.display = "block";
					get('fix_position').style.display = "none";
					get('body_right_help_section').style.position = "absolute";
					get('body_right_schedule_section').style.display = "none";
					get('body_right_home_section').style.display = "none";
					get('body_right_setting_section').style.display = "none";
					get('my-cv-section').style.display = "none";
					get('body_right_job_section').style.display = "none";
					get('body_right_flatmate_section').style.display = "none";
				}

				function tab_switchSetting(){
					get('body_right_schedule_section').style.display = "none";
					get('body_right_home_section').style.display = "none";
					get('body_right_help_section').style.display = "none";
					get('body_right_setting_section').style.display = "block";
					get('my-cv-section').style.display = "none";
					get('body_right_job_section').style.display = "none";
					get('body_right_flatmate_section').style.display = "none";
					get('fix_position').style.display = "block";
				}


				function tab_switchViewcv(){
					get('view-profile').style.display = "block";
					get('personal-info').style.display = "none";
					get('contact-address').style.display = "none";
					get('education-work').style.display = "none";
					get('about-me').style.display = "none";
				}

				function tab_switchPersonal(){
					get('view-profile').style.display = "none";
					get('personal-info').style.display = "block";
					get('contact-address').style.display = "none";
					get('education-work').style.display = "none";
					get('about-me').style.display = "none";
				}

				function tab_switchContact(){
					get('view-profile').style.display = "none";
					get('personal-info').style.display = "none";
					get('contact-address').style.display = "block";
					get('education-work').style.display = "none";
					get('about-me').style.display = "none";
				}

				function tab_switchEducation(){
					get('view-profile').style.display = "none";
					get('personal-info').style.display = "none";
					get('contact-address').style.display = "none";
					get('education-work').style.display = "block";
					get('about-me').style.display = "none";
				}

				function tab_switchAbout(){
					get('view-profile').style.display = "none";
					get('personal-info').style.display = "none";
					get('contact-address').style.display = "none";
					get('education-work').style.display = "none";
					get('about-me').style.display = "block";
				}


				/*My Applied Jobs Table Script*/
				function tab_switchMyappliedlist(){
					get('my-applied-list').style.display = "block";
					get('my-favourite-job').style.display = "none";
				}
				function tab_switchMyfavjobs(){
					get('my-applied-list').style.display = "none";
					get('my-favourite-job').style.display = "block";
				}
				/*My Wanted Place Table Script*/
				function tab_switchMywantedplacelist(){
					get('my-wanted-place').style.display = "block";
					get('my-favourite-place').style.display = "none";
				}
				function tab_switchMyfavplaces(){
					get('my-wanted-place').style.display = "none";
					get('my-favourite-place').style.display = "block";
				}

				/*Flatmate Tabs*/
				function flatmate_switchOne(){
					get('flatmate-tab-1').style.display = "block";
					get('flatmate-tab-2').style.display = "none";
					get('flatmate-tab-3').style.display = "none";
					get('flatmate-tab-4').style.display = "none";
				}
				function flatmate_switchTwo(){
					get('flatmate-tab-1').style.display = "none";
					get('flatmate-tab-2').style.display = "block";
					get('flatmate-tab-3').style.display = "none";
					get('flatmate-tab-4').style.display = "none";
				}
				function flatmate_switchThree(){
					get('flatmate-tab-1').style.display = "none";
					get('flatmate-tab-2').style.display = "none";
					get('flatmate-tab-3').style.display = "block";
					get('flatmate-tab-4').style.display = "none";
				}
				function flatmate_switchFour(){
					get('flatmate-tab-1').style.display = "none";
					get('flatmate-tab-2').style.display = "none";
					get('flatmate-tab-3').style.display = "none";
					get('flatmate-tab-4').style.display = "block";
				}
				/*Flatmate Section Tabs!!!*/
				function create_flatmate_form(){
					get('flatmate_section').style.display = "block";
					get('flatmate_table_section').style.display = "none";
					get('fix_position').style.display = "none";
					get('body_right_flatmate_section').style.position = "absolute";
					get('body_right_flatmate_section').style.left = "50%";
					get('body_right_flatmate_section').style.right = "50%";
					get('body_right_flatmate_section').style.transform = "translate(-50%, 0%)";
				}
				function flatmate_switchMe(){
					get('me-section').style.display = "block";
					get('couple-section').style.display = "none";
					get('group-section').style.display = "none";
					get('me-check').style.display = "inline-block";
					get('couple-check').style.display = "none";
					get('group-check').style.display = "none";
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #flatmate-tab-1-title").text("Me : This is the place for me.");
				}
				function flatmate_switchCouple(){
					get('me-section').style.display = "none";
					get('couple-section').style.display = "block";
					get('group-section').style.display = "none";
					get('me-check').style.display = "none";
					get('couple-check').style.display = "inline-block";
					get('group-check').style.display = "none";
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #flatmate-tab-1-title").text("Couple : This is the place for couple.");
				}
				function flatmate_switchGroup(){
					get('me-section').style.display = "none";
					get('couple-section').style.display = "none";
					get('group-section').style.display = "block";
					get('me-check').style.display = "none";
					get('couple-check').style.display = "none";
					get('group-check').style.display = "inline-block";
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #flatmate-tab-1-title").text("Group : This is the place for group.");
				}
				/*Flatmate Text Change!*/
				function flatmate_switchHome(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("Room(s) in an existing shared room");
				}
				function flatmate_switchHouse(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("Whole property for house");
				}
				function flatmate_switchStudio(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("Studio");
				}
				function flatmate_switchGrammy(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("Grammy Flats");
				}
				function flatmate_switchBed(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("One Bed Flat");
				}
				function flatmate_switchBuilding(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("Home Stay");
				}
				function flatmate_switchShared(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("Shared Room");
				}
				function flatmate_switchStudent(){
					$("#body_right_flatmate_section .flatmate_section #flatmate-tab-2 #flatmate-tab-2-title").text("Student Accomodation");
				}


				/*Setting Script!*/
				function tab_switchLanguage(){
					get('language').style.display = "block";
					get('login').style.display = "none";
					get('blocking').style.display = "none";
					get('notification').style.display = "none";
				}
				function tab_switchLogin(){
					get('language').style.display = "none";
					get('login').style.display = "block";
					get('blocking').style.display = "none";
					get('notification').style.display = "none";
				}
				function tab_switchBlocking(){
					get('language').style.display = "none";
					get('login').style.display = "none";
					get('blocking').style.display = "block";
					get('notification').style.display = "none";
				}
				function tab_switchNotification(){
					get('language').style.display = "none";
					get('login').style.display = "none";
					get('blocking').style.display = "none";
					get('notification').style.display = "block";
				}