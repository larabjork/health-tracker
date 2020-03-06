### CAPSTONE PLANNING--WORK IN PROGRESS
### 2/28/2020
* 8:15 - 8:45 create README, read assignment, plan day
* 8:45 - 9:45 research on writing good test cases and user stories
* 9:45 - 10:20 notes for user stories and acceptance criteria for this MVP; draft user stories added to README
* 10:20 - 12 ~~acceptance criteria drafting~~ scrapped acceptance criteria development for now; reformatted README/project proposal instead
* 12:00 - 1:00 tutorial on audio to text (https://www.freecodecamp.org/news/how-to-build-a-simple-speech-recognition-app-a65860da6108/)
  * QUESTIONS:
    * max length of speech? seems like it cut out.
    * responses (time of day etc. didn't seem to work)
    * save functionality? how to hang onto the text that is generated?
    * assume not going to save audio files
1:00-1:45 break
1:45-3:00 start component tree sketch
3:15-4:15 continue with component tree sketch; draft here: ![MS-Tracker-Component-Tree](/MS-Tracker-Component-Tree.jpg)
  * NEEDED REVISIONS/DECISIONS:
    * Redux or not?
    * State implications of typing versus talking to make an entry

4:15-end of day: research re: react only or use redux? main takeaway: need to revisit component tree
https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state/:
* "Assuming that your app does use Redux, you need to determine what parts of the state are stored in the Redux store, and what parts are stored in React component state. ";
* "Another consideration is how many components in your React app need to access the state. The more state needs to be shared between different components in your app, the more benefit there is to using the Redux store. If the state feels isolated to a specific component or a small part of your app, React state may be a better option."

https://redux.js.org/faq/organizing-state/:
* Some common rules of thumb for determining what kind of data should be put into Redux:
  * Do other parts of the application care about this data?
  * Do you need to be able to create further derived data based on this original data?
  * Is the same data being used to drive multiple components?
  * Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
  * Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
  * Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?


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
