// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE -------------------------------------------- DONE 6
// See Lecture 52, part 2


(function(window){
  // STEP 7: Create an object, called 'byeSpeaker' to which you will attach -------------------------------------------- DONE 7
  // the "speak" method and which you will expose to the global context
  // See Lecture 52, part 1
  let byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function. -------------------------------------------- DONE 8
  // See Lecture 52, part 2
  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;
  // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
  // xxxx.xxxx = byeSpeaker; -------------------------------------------- DONE 9
})(window);