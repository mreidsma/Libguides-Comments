#README - LibGuides Comments

---

This tool was developed by Matthew Reidsma in PHP and jQuery to make reviewing Libguides content easier.

One of our librarians is having a class of advanced students review her subject Libguide for a class project. She wanted them to be able to comment on every item on the guide, not just on each box. So I wrote her this little script. I hope you find it useful.

The script adds a little comment icon to the right of each box header or list item in LibGuides. When someone clicks the comment box, you get a nice window with fields for name, email, and comment. Clicking "Leave Comment" will show a save dialog before the box fades away. The resulting comment is just stored in a CSV file on your server for maximum portability. 

INSTALLATION

Upload libguides\_write.php, comment-icon.gif, and libguides\_comments.csv to your server and make a note of where you put them. Make sure that libguides\_write.php  and libguides\_comments.php are in the same directory.

Open up editGuides.js in your favorite text editor. You'll need to edit a few values so the script knows where to find everything. Change the value of guide\_trigger to be the id of the Guide you want this script to work on. Right now it only works on one guide. Now change write\_path to the full path (including http://) of where you saved it on your server. Do the same for icon_path, but use the URL of where you saved the icon.

Save the file and upload it to your server. Since Libguides Comments requires jQuery, we'll need a path for that (you can get it from Google if you aren't hosting it yourself). In your LibGuides Dashboard, add the following lines to your custom footer code (change the PATH/TO to the URL where you saved the script):

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="PATH/TO/editGuides.js"></script>
	
Now give yourself a high-five.

More questions? Feel free to contact Matthew Reidsma on Twitter at @mreidsma or via email at reidsmam@gvsu.edu.
can view a live version of this tool at http://matthewreidsma.com/projects/tweeps.

COPYRIGHT

This tool is copyright 2011 Matthew Reidsma. 

This tool is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This tool is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this tool. If not, see <http://www.gnu.org/licenses/>. Webkit browsers - Safari and Chrome. Try Firefox.)

More questions? Feel free to contact Matthew Reidsma on Twitter at @mreidsma or via email at reidsmam@gvsu.edu.

DEMO

You can view a live version of this tool at http://matthewreidsma.com/projects/tweeps.

FONTS

I'm using the excellent League Gothic from The League of Moveable Type for the heading font on this tool. League Gothic is released under the Open Type License (a copy is included in the fonts/ folder). More info on League Gothic can be found here: http://www.theleagueofmoveabletype.com/league-gothic

COPYRIGHT

This tool is copyright 2011 Matthew Reidsma. 

This tool is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This tool is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this tool. If not, see <http://www.gnu.org/licenses/>.