# RealizeChange
=============
### To Setup

####To start (mac):
1. Go to Terminal in Applications folder, 
	* type `cd /usr/local` then enter
	* type `brew install` then enter to install homebrew
2. Download/Install node.js: http://nodejs.org/
3. Install MongoDB
	* type `brew update` then enter
	* type `brew install mongodb`
	* type `mongodb &` - this will run mongodb in the background
	* type `disown %1` - this will detach mongodb from the current shell
# After Install
1. In Terminal: `npm install`
2. `npm install -g supervisor`
3. `cake dev`
4. Go to your browser: http://localhost:1337/


### Pages
On trying to answer questions-->( why you should register Modal)
1. Splash, Basic about, Answer Questions
2. See Answers (globals) (locked)
	* Read Dreams, Vote on Goals
	* Randomize: One question and one random
3. Map- see other's dreams (Geocharts) (locked)
4. Data Visualization (draws user specific data) (locked)
5. Login
	* Profile settings to get user specific information
6. Donate (paypal)
7. Dropdown
	* About Us
	* Mission

### TO DO
1. Reconfigure db structure 
	* User should have 
		* Own set of answers
		* An array with list of answers that they have voted on (so that they don't repeat vote)
		* user demographics data
		* location?
2. Under the login dropdown, add access to Account Settings information. Have option to fill out demographic information (country, state/province, city, ethnicity, age, gender, etc.)
3. Be able to vote
	* voting will add one vote to the answer with the matching global answer id
	* voting will add both answer options to the user's list of "options seen"
4. Add Results page that sorts answers based on their popularity (only display top 10?)
	* Add data visualization page with votes sorted by demographic data
5. Geocharts showing location of users
6. Add content--add styles

When up the site is located here: http://realizechange.herokuapp.com
![Full](/public/img/full.png)
![Compressed](/public/img/compressed.png)

