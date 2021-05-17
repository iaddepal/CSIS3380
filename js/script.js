/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
              {
                  quote:"Life is about making an impact, not making an income.",
                  source:"-Kevin Kruise",
                  citation:"Twitter",
                  year:"2012" //I couldn't find year so i have to give this number as random
              },
              {
                  quote:"Whatever the mind of man can conceive and believe, it can achieve.",
                  source:"–Napoleon Hill",
                  citation:"",
                  year:""
              },
              {
                  quote:"Strive not to be a success, but rather to be of value.",
                  source:" –Albert Einstein",
                  citation:"",
                  year:""
              },
              {
                  quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
                  source: " –Robert Frost",
                  citation:"",
                  year:""
              },
              {
                  quote:" I attribute my success to this: I never gave or took any excuse.",
                  source:" –Florence Nightingale",
                  citation:"",
                  year:""
              }
            ];
 
/***
 * `getRandomQuote` function
***/
function getRandomQuote(){

    const rand = Math.floor(Math.random()*(quotes.length));

    var randomquote = quotes[rand];

    return randomquote;
}



/***
 * `printQuote` function
***/

function printQuote(){
  
  let RandomQuote = getRandomQuote();

  let PtoHTML1 = "<p class='quote'>"+RandomQuote.quote+"</p>"+"<p class='source'>"+RandomQuote.source;
    
  if(RandomQuote.citation && RandomQuote.year)
  {
    PtoHTML1 = PtoHTML1+"<span class='citation'>"+RandomQuote.citation+"</span>"+"<span class='year'>"+RandomQuote.year+"</span>"+"</p>";
  }
  else 
  {
      PtoHTML1 = PtoHTML1+"</p>";
  }
  document.getElementById('quote-box').innerHTML = PtoHTML1;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);