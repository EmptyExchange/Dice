# Dice
Working on making a dice rolling game

5/9.. Making decent progress in getting the framework of the project set up. No issues with creating the dice and pips. No issue with the random number generator for rolling the dice. Now I need to figure out how to get each die to show the correct number of pips. I need to figure out how to add and remove pips as necessary. Maybe have all pips available for each die and hide/show the necessary pips to reflect the number rolled. 
    Pips are all added. Need to figure out how to show/hide each pip as needed. That will be controlled through javascript somehow and will reflect the number rolled. If the number is a 4 I need to "hide" the pips in grid locations c, d, and e. 

5/10.. Attempted to line items up to bottom of the page. Trying to figure out how to target individual pip on individual dice so I can adjust which ones are showing. Added id's to each die to target them individually, now to find each pip. Figured out how to make individual pips transparent. Need to class each necessary pip for each number and set them up to toggle.
    Id'd all pips.
    While looking at how to create a rolling effect I stumbled upon a great tutorial that actually does exactly what I'm looking for. Unfortunately that means starting from scratch. I found it before I got too terribly far in the code. 
5/10.. Restarted project following/learning from a tutorial. When I finish the tutorial and understand how everything works I will begin working on being able to select and keep dice. Roll the remaining dice and work on a scoring system.
    Excited that the tutorial is teaching css variables, I feel like I was midly aware of them, but have never used them before. For possible future reference or for credit to the creator the video name is "How to Create a Dice Roll Game using HTML CSS & JavaScript" by user "dcode" I will probably be checking this channel out for more, this creator is great with explenations.

5/13.. Was having an issue with the roll button adding 6 dice every time. Figured out that I wrote innerHtml. I needed innerHTML. Dice rolling is now working. Now I am on my own with trying to figure out how to set up scoring. The tutorial also had a nice rolling animation but I think because the "animation" is actually calling the randomzeDice function over and over it would make the scoring impossible. Unless I can figure out a what to only score after the roll has completed. Maybe set the scoring function to a delay and let it run after the animation. I need to figure out the scoring first.
    Got basic scoring of 5's and 1's to work. It adds them to "score" need to figure out how to get it to catch 3 of a kind and other more complicated scoring. 
    As expected using the cool rolling animation causes the score to go batty. Need to find another way to collect score or animate.
    Possible solution to scoring issue. instead of having a score variable that updates as the random numbers are created. Push the random numbers into an array and loop the array to create the score. 

5/14.. Another idea. Need to be able to select certain dice and reroll the rest. Need to be able to score the kept dice and accumulate the score. Or maybe limit to 3 rolls total and take score at the end.     

5/15.. Removed score dice function. Will add back.
    Using this to think through what I need. Pushing to array doesn't work with the animation.
    Press roll and all 6 dice change as well as the button that says roll changes to "second roll". An array holding six 0's. Dice are able to be clicked and highlighted to keep. Second roll button is pressed.
    The arrray holding the 0's is modified. The held quantities are pushed into the array and 0's are popped off. The number of 0's in the array changes the quantity of dice. The remaining dice that were not held are then rolled. The array is reset to 0's and player gets the option of which dice to hold again. including dice previously held. Button changes to "final roll". Same process of rolling as above.
    On final roll button changes to "collect score" No option to highlight this time. array has been reset to 0's again, but this time all 6 are pushed into the array and all 0's are popped off. 
    Then scoring begins. 
    1 = 100
    5 = 50
    3 of a kind = # * 100
    4 of a kind = # * 100 * 2
    5 of a kind = # * 100 * 3
    6 of a kind = # * 100 * 5 (extra bonus for getting all 6)
    1 to 6 = 500
I believe this will work. Now I just need time to work it out in the code.

5/16.. Do I need to have static dice divs that each have an id of number postion so I can keep them separated. Right now the javascript is creating the div when it gets rolled. I need more time so I can work it out.
    Figured out how to set each die with an indiviual id. Now I can target each die. Will also work in the future when dice are added or subtracted during gameplay. Next step is to highlight dice.
    Figured out how to toggle class for each die and created a savedDice css class to make it look highlighted

5/17.. Not much time today, but was able to trade out original roll button with second roll button. Still need to put the roll function on the second roll button, as well as figure out how to handle what to do after the third roll and how to handle the scoring. Automatically take the largest score possible or make the player keep the right dice so they have to think about and can possible strategize about what to do with their score. I might have more time next week or possibly will get this on my chromebook at home. 

5/18.. Was having trouble figuring out how to add an event listener to an object that doesn't exist. What I did was put the function that creates the second roll button inside the original roll function. I will need to do the same with the final roll. That way they look for the event listener AFTER the object is created. I got the functoin to work for all the dice rolls. It looks horrible and is hard to read. I will try to clean it up when I work on it again.

5/21.. Refactored code a bit. Individualized the button creations and made a function for dice rolling. Next step is to figure out how to keep dice. I am able to toggle the class and show that it has been selected but need to figure out where that information is so I can place it in another array and keep it. More refactor but I don't think I like it. I made a function that creates the button, makes the code look more clean but I feel like it limits me on naming the button. Maybe I don't even need a new button each time. Maybe just change the ID of the button instead??? 
    Was able to change id on the dice instead of removing and adding buttons. but now when i do the final roll it makes a button that says collect points but it is also looking for the second roll button. Not sure why but I think it will cause issues in the future. 
