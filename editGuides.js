$(document).ready(function() {
	
	// Add commenting links to every item on a Libguide and save the comments to a CSV file
	// Requires jQuery: http://jquery.com
	
	// Change the following line to be the guide id you want this script to work on:
	var guide_trigger = "";
	
	// Change the following line to be the path of the libguides_write.php file
	var write_path = "";
	
	// Change the following line to be the path of the comment-icon.gif file
	var icon_path = "";
	
	// Don't edit below this unless you know what you are doing.
	// #########################################################

	// From http://www.bloggingdeveloper.com/post/JavaScript-QueryString-ParseGet-QueryString-with-Client-Side-JavaScript.aspx

	function getQuerystring(key, default_)
	{
	  if (default_==null) default_=""; 
	  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
	  var qs = regex.exec(window.location.href);
	  if(qs == null)
	    return default_;
	  else
	    return qs[1];
	}

	// Let's only enable this script on the LibGuides we want
	
		var guide_value = getQuerystring('pid');
		var datastring = "";
		
		// Add some styles for the modal window
		
		var styles = '<style>.modal-window{position:absolute;top:30%;left:25%;width:50%;z-index:100;background:#ededed;padding:1em;box-shadow:5px 5px 5px #888;}.notsubmitted{background: #0090D2; background: -webkit-gradient(linear, left top, left bottom, color-stop(.2, #52a8e8), color-stop(1, #2e76cf));background: -moz-linear-gradient(center top, #52a8e8 20%, #2e76cf 100%);border: 1px solid #4081af; border-bottom-color: #20559a;-webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.3), inset 0 0 2px rgba(255,255,255,.3), 0 1px 2px rgba(0,0,0,.29); -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.3), inset 0 0 2px rgba(255,255,255,.3), 0 1px 2px rgba(0,0,0,.29); box-shadow: inset 0 1px 0 rgba(255,255,255,.3), inset 0 0 2px rgba(255,255,255,.3), 0 1px 2px rgba(0,0,0,.29);color: white;}#submit-comment{display: inline-block;font-weight:normal;text-decoration:none;cursor: pointer;font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;padding: .333em .75em;font-size:1em;line-height:1.3125em;float:right;margin-top:1em;}.modal-window input[type="text"],.modal-window input[type="email"],.modal-window textarea{width: 100%;font-size:1.1em;}.modal-window textarea { height: 5em;}.modal-window label{display:block;font-weight:bold;text-transform:uppercase;}.submitting{background:#eee;background:-moz-linear-gradient(top, rgba(255, 255, 255, .2) 0%, rgba(0, 0, 0, .2) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255, 255, 255, .2)), color-stop(100%,rgba(0, 0, 0, .2)));background: -webkit-linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);background: -o-linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);background: -ms-linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);background: linear-gradient(top, rgba(255, 255, 255, .2) 0%,rgba(0, 0, 0, .2) 100%);border: 1px solid #aaa;border-top: 1px solid #ccc;border-left: 1px solid #ccc;}.lib-edit_link{float:right;}</style>';
		$("head").append(styles);
		
		if(guide_value == guide_trigger) { // Id of the Guide we want this to work on
		
			var edit_link = '<a href="#" class="lib-edit_link"><img src="' + icon_path + '" alt="Comment" /></a>';
		
			// First let's hide the existing comments links
			
				$(".box_comments").find("a").hide();
			
			// Now we'll add the editing link to the end of the elements we want students to comment on
	
				$("#content").find("div.headerbox").find("h2").append(edit_link); // Complete Boxes
				$("#content").find("div.innerbox").find(".boxatt").find("a").parent().prepend(edit_link);
				$("#content").find("div.innerbox").find("table").find("td").append(edit_link);
				
				// One stupid link that is not like the others
				
				$(".pdisplay_author").find("a.lib-edit_link").remove();
	
			// Now let's set a click handler to give them a form to fill out
			
				$("a.lib-edit_link").click(function() {
					
					// Show the modal window
					
					var id = $(this).parent().attr("id");
					var desc = $(this).parent().text();
					
					var modalWindow = '<div class="modal-window"><input type="hidden" name="id" value="' + id + '" /><input type="hidden" name="desc" value="' + desc + '" /><label for="Name">Your Name</label> <input type="text" name="Name" class="required" required="required" /><br /><label for="email">Email</label> <input type="email" name="email" /><br /><label for="comment">Comments</label><br /><textarea name="comment"></textarea><input type="submit" value="Leave Comment" name="submit" id="submit-comment" class="notsubmitted" /></div>';
					
					$("body").append(modalWindow);
					
					// Then we'll set the form to save in the background to a CSV file when submitted
					
					$(".notsubmitted").click(function() {
						
						$(this).attr("class","submitting").val("Saviing...");
						
						// Grab all the form values 
						
						var name = $("input[name='Name']").val();
						var email = $("input[name='email']").val();
						var comment = $("textarea[name='comment']").val();
						
						// Get timestamp
						ts = Math.round((new Date()).getTime() / 1000);
						
						datastring = datastring + ts + ";" + id + ";" + desc + ";" + comment + ";" + name + ";" + email;
						datastring = "data=" + datastring;
						$.ajax({
							dataType: "string",
							type: "POST",
							url: write_path,
							data: datastring
						});
						datastring = "";
						clicked = "";
						setTimeout(function() { $(".modal-window").fadeOut(800); }, 1200);
						
					});
										
				});
			
		}
	

});