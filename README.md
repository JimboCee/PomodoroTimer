Jimbo's Pomodoro Timer
======

What's a Pomodoro Timer?
======

The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks.

### The original technique has six steps:

1. Decide on the task to be done.
2. Set the pomodoro timer (typically for 25 minutes).
3. Work on the task.
4. End work when the timer rings and take a short break (typically 5–10 minutes).
5. If you have finished fewer than three pomodoros, go back to Step 2 and repeat until you go through all three pomodoros.
6. After three pomodoros are done, take the fourth pomodoro and then take a long break (typically 20 to 30 minutes). Once the long break is finished, return to step 2.

For the purposes of the technique, a pomodoro is an interval of work time.

Visit the Github pages deployment to try it out for yourself. In Settings you can adjust the times of your Work and Break sessions to better fit to the task you're working on. I like to work in 30 minute bursts with a 10 minute break, but I've known people to go 60/15, 20/15 and 10/5.

Inspiration and Design Considerations
======

## Like any student and aspiring Developer, I've watched a lot of YouTube tutorials. 
### In admist of the sea of videos I noticed;

A lot of people recommend a Pomodoro Timer as a good initial project to get started with Javascript and its functions. 

A *lot* of people seem to enjoy watching and studying alongside 3 hour videos of other people studying. Generally, the Pomodoro technique is used.

The [react-circular-progress-bar](https://www.npmjs.com/package/react-circular-progressbar) Javascript library essentially set the groundwork for this entire App. Being able to implement a Progress bar and enter a few parameters and a bit of ext. styling and have a component that just *works* is very nice.

The settings are quite self-explanatory, they hide behind a component which changes them based on an onClick function. Any future implementations as listed below should be kept away from this current settings wrapper, so as not to bulk up the container. 

I'd like to change the base colours for a shifting gradient, this will be marked as a 'TODO' here, as well as a Github Repo Issue (If you're reading this, please consider looking at the issues)

# Open Source Collaboration

As this project is a Frankenstein's Monster of various local project files that resulted from watching a bright faced YouTube Content Creators for about a week, all while taking notes
and getting involved sporadically, the project is entirely Open Source. You're more than welcome to edit colors for the progress bar, settings sliders and backgrounds for the application. I've tried to design it with an amount of creative ease for the dev user, but I'd like to see some more functionality long term.

0.2 WISHLIST
====== 

Bells and/or Whistles 
------
*Things to Add*
  
- Background Color Picker 

- Colors for Breaks and Study Sessions, change with a smooth color shift at the end of a study or break period.
    
- Music hooks to play when the timer has ended; natural sounds and gentle analogue tones helping bring the user into and out of each mode of study. 
>Think 'Brian Eno's Moodboard when he was working on Windows 95. Just any of Brian Eno's ambient work, in general. 

*Long Term*
    
   - iOS/Android Application 
    
   - ??? 
    
   - Profit

Available Scripts
======
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## A Project By
James Cranham, 2022
