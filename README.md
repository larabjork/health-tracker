
# MS Health Tracker: Epicodus Capstone Project
## Created by Lara Bjork, March 2020

### Project Description
This app will help people who have multiple sclerosis (like me!) record and keep track of what matters most to them. Medical records never tell the whole story of what it’s like to have a chronic health condition or what a patient has done to take care of themselves. Doctors and other medical professionals have different priorities than patients, and there are many details that matter a lot to patients. This app will help patients document the full picture of how the disease is affecting them and all the things that they are doing to take care of themselves.

### Minimum Viable Product (as of 2/28/2020)
* Options for user to decide what to track, including doctor-driven actions (appointments, tests, medications) and/or patient-driven actions (other forms of care, exercise, diet, social support, etc.).
* Symptom journaling that helps a user sort through one-off/short-duration symptoms from bigger concerns, while also helping organize symptom info over time to look for patterns; with that info, the user can prep for appointments or other communications with a doctor’s office.
* Journaling will be possible by typing or by transcribing audio recorded by the user.

### User Stories
1. As a user, I want to be able to keep track of significant dates/events in my MS history, so that I can easily tell my story to a health practitioner, either when talking with them or filling out new patient paperwork.
2. As a user, I want to be able to log my experience of having MS, whether or not it meets an official “symptom” or relapse, so that I can make sense of what I live with.
3. As a user, I want to be able to log my experience of having MS, I want to be able to choose how often I make journal entries, so that tracking my experiences stays useful and doesn’t become burdensome.
4. As a user, I want to be able to review my journal to find themes/patterns/questions, so that I can prepare for doctor visits.
5. As a user, I want to be able to track the activities I choose to pursue to support myself, so that I can remind myself that I am taking good care of myself.
6. As a user, I want to be able to have a choice between using preset categories for actions I take and creating my own system (or somewhere in between), so that I have a balance of structure and flexibility.
7. As a user, I want to be able to choose how I enter information (typed on laptop, tablet or phone, or recorded audio that is then transcribed), so that I can use whatever method is most convenient and most accessible at a given moment.

### Current Version of Component Tree
component tree v2.1 ![MS-Tracker-Component-Tree-v2.1](/MS-Tracker-Component-Tree-v2.1.jpg)

### Sources
MAKE SURE THIS LICENSING STUFF IS ADDRESSED: https://icons8.com/license

_ _


PROJECT PROPOSAL TO BE REFINED TO MATCH ACTUAL PRODUCT

What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

* WebSpeechAPI or similar tool for speech recognition and transcription: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
* React and/or React Native (but probably React Native to start?), Redux, JavaScript, HTML, CSS, custom API to store info (so Ruby/Postgres?) ~~authentication via bcrypt or Devise, some kind of encryption that meets health info privacy standards (?)~~

* * *

If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

* I would like to have a web version and a mobile version, so that people can work on the device of their choosing, but my MVP will be to do only one of these (starting point still to be determined, based on developing comfort level with React vs. React Native)
* Other features could be
  * Calendar integration (for medical appointments and other reminders);
  * Medication management: photos of your medications/dosages; refill reminders;
  * Insurance information;
  * Authorizing other users to view your info;
  * Social media function to connect to other patients;
  * Other ways you can connect to MS community: research study participation, advocacy, fundraising;
  * Authentication via bcrypt or Devise, some kind of encryption that meets health info privacy standards

* * *

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
* Authorization/authentication via bCrypt or Devise
* Calendar integration: Google calendar API and similar for other calendar apps
* Sharing health info with another user: OAuth or comparable service?
