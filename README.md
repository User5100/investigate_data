**Instructions**

1. Clone the repository
2. In your terminal, navigate to the application directory
3. Install dependencies - $npm install
4. $npm start - will launch the application

Bug alert!

If the application fails to compile and displays the error,

![Alt text](bug.gif?raw=true "Bug")

browse to src/app/reducers/index.ts and save the file without making any changes! It should now work.

Head over to http://localhost:4200

**Assumptions/Workarounds**

Of the given dataset of search results, I took the first 7 elements and augmented the key words for each manually to arrive at the data used in this application.

**Overview of application**

The home route displays a list of the most popular key words. Here I'm assuming the more often a word is used, the more relevant it is.

![Alt text](summary.gif?raw=true "Summary")

The user can click on each listed word to reveal insight into the context in which the word has been used...

Below a user has clicked on the word 'SUHARTO' and is now browsing the list of articles with list word.

Again I've made a basic assumption that the more frequent the word is used the higher the article would be ranked in the listing.

In hindsight the ranking should factor in correlations between associative words.

Further a distinction should be made between the types of words. For example some words are names of people, places, some describe actions or emotions. This should be factored into the rankings.

As you can see clicking on an article will reveal the summary on the left of the display, so the user avoids navigating away from the current page.

![Alt text](browse.gif?raw=true "Browse")

**Known issues**

Menu not implemented.

The observable stream responsible for supplying data to the detail component does not refresh when the user clicks on a key word.

The dispatch of the "article" to ngrx/Store needs to occur at the point the user clicks, not when the Source component has been initialised.

Objects and arrays are not yet 'typed'. 

Some implemention details in sources component and data service should be abstracted away into helper files to seperate the 'how' from the 'what'.

Remove any RXJS operators not needed.

**Ideas for improvement**

Integrate Wikipedia API to help provide additional context on the key words and the information sources themselves.

Each common word will have a associative words that gives that word further context and meaning. Visualising this with using existing data with a bubble chart could help the user gain quick insight without cognitive overload.

The data may need to be further manipulated to a structure wherby each common words has a set of words used in conjunction with, and it's this set of words that needs to be ranked. A ranking within a ranking if you will.


