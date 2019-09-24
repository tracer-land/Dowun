$(document).ready(function(){
				$('[data-toggle="tooltip"]').tooltip();


				/*Selection Modal Script!*/
				$("#myselection").change(function(){
					var opval = $(this).val();
					if(opval=="modal-selection"){
						$("#myModal").modal("show");
					}
				});

				/*Wrap Active*/
				$("#body_right_inbox_section .inbox-section .message-search a").click(function(){
					$("#body_right_inbox_section .inbox-section .message-search a").removeClass("active_tab");
					$(this).addClass("active_tab");
				});

				/*Tab Title Active*/
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

				/*Caret Script!*/
				$("#second-ul li a").click(function(){
					$("#second-ul li a span").toggleClass("caret");
				});

				/*Slide Toggle Start!!!*/
				$("#body_right_setting_section .table_section .my_setting .tab-section #login .password-tab").click(function(){
					$("#body_right_setting_section .table_section .my_setting .tab-section #login .password-toggle").slideToggle();
				});

				$("#body_right_setting_section .table_section .my_setting .tab-section #login .email-tab").click(function(){
					$("#body_right_setting_section .table_section .my_setting .tab-section #login .email-toggle").slideToggle();
				});

				$("#body_right_setting_section .table_section .my_setting .tab-section #login .phone-tab").click(function(){
					$("#body_right_setting_section .table_section .my_setting .tab-section #login .phone-toggle").slideToggle();
				});

				/*Flatmate Form*/
				$("#body_right_flatmate_section #flatmate_table_section .create_flatmate_form").click(function(){
					$("#body_right_flatmate_section").removeClass("col-md-10");
					$("#body_right_flatmate_section").addClass("col-md-12");
				});


				var max_form = 7;
				var wrapper = $(".add-form-wrap");
				var add_button = $(".add-form-btn");

				var x = 1;


				$(add_button).click(function(e){
					e.preventDefault();
					if(x<max_form){
						x++;
						$(wrapper).append('<div style="clear:both;"><form action="#"><div class="col-md-8"><label for="name">Your Friend Name</label><input type="text" name="name" placeholder="Enter Your Friend Name" class="form-control" required></div><div class="col-md-4"><label for="age">Your Friend Age</label><input type="text" name="age" placeholder="Enter Your Friend Age" class="form-control" required></div><div class="col-md-12" style="padding: 0px;"><label style="display: block;">Gender</label><label class="gender"><i class="fa fa-male"></i><span>Male</span><input type="radio" name="gender" value="male" required checked><em class="fa fa-check-circle" id="third-check"></em></label><label class="gender"><i class="fa fa-female"></i><span>Female</span><input type="radio" name="gender" value="female" required><em class="fa fa-check-circle" id="third-check"></em></label></div></form><a href="#" class="btn btn-sm btn-danger pull-right remove_form" style="display:block;">Remove</a></div>');
					}
				});
				//Remove Form
				$(wrapper).on("click",".remove_form", function(e){
					e.preventDefault(); $(this).parent('div').remove(); x--;
				});

			});

			function get(obj){
				return document.getElementById(obj);
			}

			//Sub Menu Script
			//Functions start
			function tab_switchHome(){
				get('body_right_home_section').style.display = "block";
				get('body_right_job_section').style.display = "none";
				get('body_right_flatmate_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('fix_position').style.display = "block";
			}

			function tab_switchJob(){
				get('body_right_job_section').style.display = "block";
				get('body_right_home_section').style.display = "none";
				get('body_right_flatmate_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('fix_position').style.display = "block";
			}

			function tab_switchFlatmate(){
				get('body_right_flatmate_section').style.display = "block";
				get('flatmate_section').style.display = "none";
				get('flatmate_table_section').style.display = "block";
				get('body_right_job_section').style.display = "none";
				get('body_right_home_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";

				var element = get('body_right_flatmate_section');
				element.classList.remove('col-md-12');
				element.classList.add('col-md-10');
			}

			function tab_switchSetting(){
				get('body_right_setting_section').style.display = "block";
				get('body_right_home_section').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_flatmate_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
			}

			function tab_switchInbox(){
				get('body_right_inbox_section').style.display = "block";
				get('body_right_setting_section').style.display = "none";
				get('body_right_home_section').style.display = "none";
				get('body_right_flatmate_section').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('fix_position').style.display = "block";
			}

			function tab_switchLanguage(){
				get('language').style.display = "block";
				get('login').style.display = "none";
				get('blocking').style.display = "none";
				get('pagerole').style.display = "none";
				get('notification').style.display = "none";
				get('helpcenter').style.display = "none";
			}
			function tab_switchLogin(){
				get('language').style.display = "none";
				get('login').style.display = "block";
				get('blocking').style.display = "none";
				get('pagerole').style.display = "none";
				get('notification').style.display = "none";
				get('helpcenter').style.display = "none";
			}
			function tab_switchBlocking(){
				get('language').style.display = "none";
				get('login').style.display = "none";
				get('blocking').style.display = "block";
				get('pagerole').style.display = "none";
				get('notification').style.display = "none";
				get('helpcenter').style.display = "none";
			}
			function tab_switchPagerole(){
				get('language').style.display = "none";
				get('login').style.display = "none";
				get('blocking').style.display = "none";
				get('pagerole').style.display = "block";
				get('notification').style.display = "none";
				get('helpcenter').style.display = "none";
			}
			function tab_switchNotification(){
				get('language').style.display = "none";
				get('login').style.display = "none";
				get('blocking').style.display = "none";
				get('pagerole').style.display = "none";
				get('notification').style.display = "block";
				get('helpcenter').style.display = "none";
			}
			function tab_switchHelpcenter(){
				get('language').style.display = "none";
				get('login').style.display = "none";
				get('blocking').style.display = "none";
				get('pagerole').style.display = "none";
				get('notification').style.display = "none";
				get('helpcenter').style.display = "block";
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
			}
			function flatmate_switchMe(){
				get('me-section').style.display = "block";
				get('couple-section').style.display = "none";
				get('group-section').style.display = "none";
				get('first-check').style.display = "inline-block";
				get('second-check').style.display = "none";
				get('third-check').style.display = "none";
				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #flatmate-tab-1-title").text("Me : This is the place for me.");
			}
			function flatmate_switchCouple(){
				get('me-section').style.display = "none";
				get('couple-section').style.display = "block";
				get('group-section').style.display = "none";
				get('first-check').style.display = "none";
				get('second-check').style.display = "inline-block";
				get('third-check').style.display = "none";
				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #flatmate-tab-1-title").text("Couple : This is the place for couple.");
			}
			function flatmate_switchGroup(){
				get('me-section').style.display = "none";
				get('couple-section').style.display = "none";
				get('group-section').style.display = "block";
				get('first-check').style.display = "none";
				get('second-check').style.display = "none";
				get('third-check').style.display = "inline-block";
				$("#body_right_flatmate_section .flatmate_section #flatmate-tab-1 #flatmate-tab-1-title").text("Group : This is the place for group.");
			}

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


			var textarea = document.querySelector('textarea');

			textarea.addEventListener('keydown', autosize);
			             
			function autosize(){
			  var el = this;
			  setTimeout(function(){
			    el.style.cssText = 'height:auto; padding:0';
			    // for box-sizing other than "content-box" use:
			    // el.style.cssText = '-moz-box-sizing:content-box';
			    el.style.cssText = 'height:' + el.scrollHeight + 'px';
			  },0);
			}


			$("#myemoji").emojioneArea({
			    pickerPosition: "top"
			});