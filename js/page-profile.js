$(document).ready(function(){
				$('[data-toggle="tooltip"]').tooltip();


				/*Selection Modal Script!*/
				$("#interview-selection").change(function(){
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


				/*Help Slide Text!*/
				$("#body_right_help_section .help_section .help_section_text ul span").click(function(){
					$(this).next("div").slideToggle();
				});


				/*House Tab Title Active*/
				$("#body_right_house_section .house_section #tab-title li").click(function(){
					$("#body_right_house_section .house_section #tab-title li").removeClass("active-tab-title");
					$(this).addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #tab-title-commercial li").click(function(){
					$("#body_right_house_section .house_section #tab-title-commercial li").removeClass("active-tab-title");
					$(this).addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-1 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title #house-property-address").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-2 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title #house-date-charges").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-3 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title #house-offer-accept").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-4 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title #house-safe-near").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-5 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title #house-title-images").addClass("active-tab-title");
				});
				/*Commercial Tab Title Active!*/
				$("#body_right_house_section .house_section #house-tab-1 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title-commercial li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title-commercial #house-property-address").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-2 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title-commercial li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title-commercial #house-date-charges").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-3 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title-commercial li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title-commercial #house-offer-accept").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-4 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title-commercial li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title-commercial #house-safe-near").addClass("active-tab-title");
				});
				$("#body_right_house_section .house_section #house-tab-5 .section-footer button").click(function(){
					$("#body_right_house_section .house_section #tab-title-commercial li").removeClass("active-tab-title");
					$("#body_right_house_section .house_section #tab-title-commercial #house-title-images").addClass("active-tab-title");
				});


				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1 .col-md-3").click(function(){
					$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1 .col-md-3").removeClass("bg-color-add");
					$(this).addClass("bg-color-add");
				});
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-2 .col-md-4").click(function(){
					$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-2 .col-md-4").removeClass("bg-color-add");
					$(this).addClass("bg-color-add");
				});

				/*Caret Script!*/
				$("#second-ul li").click(function(){
					$("#second-ul li span").removeClass("caret");
					$(this).find("span").addClass("caret");
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

			});

			function get(obj){
				return document.getElementById(obj);
			}

			//Sub Menu Script
			//Functions start
			function tab_switchHome(){
				get('body_right_home_section').style.display = "block";
				get('page-information').style.display = "block";
				get('body_right_job_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('fix_position').style.display = "block";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
			}

			function tab_switchJob(){
				get('body_right_job_section').style.display = "block";
				get('job_section').style.display = "none";
				get('job_table_section').style.display = "block";
				get('body_right_home_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('fix_position').style.display = "block";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
				get('body_right_job_section').style.position = "static";
				get('body_right_job_section').style.left = "0%";
				get('body_right_job_section').style.right = "0%";
				get('body_right_job_section').style.transform = "translate(0%, 0%)";
			}

			function tab_switchHouse(){
				get('body_right_house_section').style.display = "block";
				get('house_section').style.display = "none";
				get('house_table_section').style.display = "block";
				get('body_right_job_section').style.display = "none";
				get('body_right_home_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('fix_position').style.display = "block";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
				get('body_right_house_section').style.position = "static";
				get('body_right_house_section').style.left = "0%";
				get('body_right_house_section').style.right = "0%";
				get('body_right_house_section').style.transform = "translate(0%, 0%)";
			}


			function tab_switchPhoto(){
				get('body_right_photo_section').style.display = "block";
				get('body_right_home_section').style.display = "block";
				get('page-information').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
				get('fix_position').style.display = "block";
			}

			function tab_switchService(){
				get('body_right_service_section').style.display = "block";
				get('body_right_home_section').style.display = "block";
				get('page-information').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('body_right_photo_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
				get('fix_position').style.display = "block";
			}


			function tab_switchReview(){
				get('body_right_review_section').style.display = "block";
				get('body_right_home_section').style.display = "block";
				get('page-information').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('body_right_photo_section').style.display = "none";
				get('fix_position').style.display = "block";
			}


			function tab_switchHelp(){
				get('body_right_help_section').style.display = "block";
				get('body_right_setting_section').style.display = "none";
				get('body_right_home_section').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
				get('fix_position').style.display = "none";
				get('body_right_help_section').style.position = "absolute";
			}

			function tab_switchSetting(){
				get('body_right_setting_section').style.display = "block";
				get('body_right_help_section').style.display = "none";
				get('body_right_home_section').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
				get('fix_position').style.display = "block";
			}

			function tab_switchInbox(){
				get('body_right_inbox_section').style.display = "block";
				get('body_right_help_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_home_section').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";
				get('fix_position').style.display = "block";
			}

			function tab_switchMessage(){
				get('message').style.display = "block";
				get('pagerole').style.display = "none";
				get('notification').style.display = "none";
			}
			function tab_switchPagerole(){
				get('message').style.display = "none";
				get('pagerole').style.display = "block";
				get('notification').style.display = "none";
			}
			function tab_switchNotification(){
				get('message').style.display = "none";
				get('pagerole').style.display = "none";
				get('notification').style.display = "block";
			}

			/*Job Tabs*/
			function create_job_form(){
				get('job_section').style.display = "block";
				get('job_table_section').style.display = "none";
				get('fix_position').style.display = "none";
				get('body_right_job_section').style.position = "absolute";
				get('body_right_job_section').style.left = "50%";
				get('body_right_job_section').style.right = "50%";
				get('body_right_job_section').style.transform = "translate(-50%, 0%)";
			}
			function create_job_form_direct(){
				get('job_section').style.display = "block";
				get('job_table_section').style.display = "none";
				get('fix_position').style.display = "none";
				get('body_right_job_section').style.display = "block";
				get('body_right_home_section').style.display = "none";
				get('body_right_house_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";

				get('body_right_job_section').style.position = "absolute";
				get('body_right_job_section').style.left = "50%";
				get('body_right_job_section').style.right = "50%";
				get('body_right_job_section').style.transform = "translate(-50%, 0%)";
			}

			function job_switchTwo(){
				get('job-tab-1').style.display = "none";
				get('job-tab-2').style.display = "block";
			}
			function job_switchOne(){
				get('job-tab-1').style.display = "block";
				get('job-tab-2').style.display = "none";
			}

			/*House Section Tabs!!!*/
			function create_house_form(){
				get('house_section').style.display = "block";
				get('house_table_section').style.display = "none";
				get('fix_position').style.display = "none";
				get('body_right_house_section').style.position = "absolute";
				get('body_right_house_section').style.left = "50%";
				get('body_right_house_section').style.right = "50%";
				get('body_right_house_section').style.transform = "translate(-50%, 0%)";
			}
			function create_house_form_direct(){
				get('house_section').style.display = "block";
				get('house_table_section').style.display = "none";
				get('fix_position').style.display = "none";
				get('body_right_house_section').style.display = "block";
				get('body_right_home_section').style.display = "none";
				get('body_right_job_section').style.display = "none";
				get('body_right_setting_section').style.display = "none";
				get('body_right_inbox_section').style.display = "none";
				get('body_right_help_section').style.display = "none";
				get('body_right_photo_section').style.display = "none";
				get('body_right_service_section').style.display = "none";
				get('body_right_review_section').style.display = "none";

				get('body_right_house_section').style.position = "absolute";
				get('body_right_house_section').style.left = "50%";
				get('body_right_house_section').style.right = "50%";
				get('body_right_house_section').style.transform = "translate(-50%, 0%)";
			}


			/*Living & Commercial Tabs!!!*/
			function house_switchLive(){
				get('first-check').style.display = "inline-block";
				get('second-check').style.display = "none";
				get('tab-title').style.display = "block";
				get('house-tab-1-row-1').style.display = "block";
				get('house-tab-1-row-2').style.display = "block";
				get('house-tab-2-row-1').style.display = "block";
				get('house-tab-3-row-1').style.display = "block";
				get('house-tab-4-row-1').style.display = "block";
				get('house-tab-5-row-1').style.display = "block";
				get('house-tab-6-row-1').style.display = "block";
				get('commercial-house-tab-1-row-2').style.display = "none";
				get('commercial-house-tab-2-row-1').style.display = "none";
				get('commercial-house-tab-3-row-1').style.display = "none";
				get('commercial-house-tab-4-row-1').style.display = "none";
				get('commercial-house-tab-5-row-1').style.display = "none";
				get('commercial-house-tab-6-row-1').style.display = "none";
				get('tab-title-commercial').style.display = "none";
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-title").text("Living : People To Live & Stay");
			}
			function house_switchCommercial(){
				get('first-check').style.display = "none";
				get('second-check').style.display = "inline-block";
				get('tab-title').style.display = "none";
				get('house-tab-1-row-1').style.display = "none";
				get('house-tab-1-row-2').style.display = "none";
				get('house-tab-2-row-1').style.display = "none";
				get('house-tab-3-row-1').style.display = "none";
				get('house-tab-4-row-1').style.display = "none";
				get('house-tab-5-row-1').style.display = "none";
				get('house-tab-6-row-1').style.display = "none";
				get('tab-title-commercial').style.display = "block";
				get('commercial-house-tab-1-row-2').style.display = "block";
				get('commercial-house-tab-2-row-1').style.display = "block";
				get('commercial-house-tab-3-row-1').style.display = "block";
				get('commercial-house-tab-4-row-1').style.display = "block";
				get('commercial-house-tab-5-row-1').style.display = "block";
				get('commercial-house-tab-6-row-1').style.display = "block";
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-title").text("Commercial : People To Live & Stay");
			}
			function house_switchOne(){
				get('house-tab-1').style.display = "block";
				get('house-tab-2').style.display = "none";
				get('house-tab-3').style.display = "none";
				get('house-tab-4').style.display = "none";
				get('house-tab-5').style.display = "none";
				get('house-tab-6').style.display = "none";
			}
			function house_switchTwo(){
				get('house-tab-1').style.display = "none";
				get('house-tab-2').style.display = "block";
				get('house-tab-3').style.display = "none";
				get('house-tab-4').style.display = "none";
				get('house-tab-5').style.display = "none";
				get('house-tab-6').style.display = "none";
			}
			function house_switchThree(){
				get('house-tab-1').style.display = "none";
				get('house-tab-2').style.display = "none";
				get('house-tab-3').style.display = "block";
				get('house-tab-4').style.display = "none";
				get('house-tab-5').style.display = "none";
				get('house-tab-6').style.display = "none";
			}
			function house_switchFour(){
				get('house-tab-1').style.display = "none";
				get('house-tab-2').style.display = "none";
				get('house-tab-3').style.display = "none";
				get('house-tab-4').style.display = "block";
				get('house-tab-5').style.display = "none";
				get('house-tab-6').style.display = "none";
			}
			function house_switchFive(){
				get('house-tab-1').style.display = "none";
				get('house-tab-2').style.display = "none";
				get('house-tab-3').style.display = "none";
				get('house-tab-4').style.display = "none";
				get('house-tab-5').style.display = "block";
				get('house-tab-6').style.display = "none";
			}
			function house_switchSix(){
				get('house-tab-1').style.display = "none";
				get('house-tab-2').style.display = "none";
				get('house-tab-3').style.display = "none";
				get('house-tab-4').style.display = "none";
				get('house-tab-5').style.display = "none";
				get('house-tab-6').style.display = "block";
			}


			/*Jobs Table Script*/
			function tab_switchMyjoblist(){
				get('job-list').style.display = "block";
				get('application-list').style.display = "none";
				get('fav-cv').style.display = "none";
			}
			/*Application Table Script*/
			function tab_switchMyapplicationlist(){
				get('job-list').style.display = "none";
				get('application-list').style.display = "block";
				get('fav-cv').style.display = "none";
			}
			/*Favourite CV Table Script*/
			function tab_switchMyFavouritecv(){
				get('job-list').style.display = "none";
				get('application-list').style.display = "none";
				get('fav-cv').style.display = "block";
			}


			/*Rent List Table Script*/
			function tab_switchMyrentlist(){
				get('rent-list').style.display = "block";
				get('flatmate-list').style.display = "none";
				get('favourit-house-list').style.display = "none";
			}
			/*Flatmate List Table Script*/
			function tab_switchMyflatmatelist(){
				get('rent-list').style.display = "none";
				get('flatmate-list').style.display = "block";
				get('favourit-house-list').style.display = "none";
			}
			/*Favourite List Table Script*/
			function tab_switchMyFavouritelist(){
				get('rent-list').style.display = "none";
				get('flatmate-list').style.display = "none";
				get('favourit-house-list').style.display = "block";
			}

			/*House Text Change!*/
			function house_switchHome(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("Room(s) in an existing shared room");
			}
			function house_switchHouse(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("Whole property for house");
			}
			function house_switchStudio(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("Studio");
			}
			function house_switchGrammy(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("Grammy Flats");
			}
			function house_switchBed(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("One Bed Flat");
			}
			function house_switchBuilding(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("Home Stay");
			}
			function house_switchShared(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("Shared Room");
			}
			function house_switchStudent(){
				$("#body_right_house_section .house_section #house-tab-1 #house-tab-1-row-1-title").text("Student Accomodation");
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