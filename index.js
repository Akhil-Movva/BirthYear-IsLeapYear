const readVariable = require('readline-sync');
const chalk = require('chalk');
const name = readVariable.question(chalk.green("Hey! What's your name?\n"));

var db = readVariable.question(chalk.green('\nEnter your date of birth in (MM-DD-YYYY)/(MM/DD/YYYY)/(MM.DD.YYYY) format:\n'), {
  limit: function(input) {
  const dateFormat = new RegExp(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)[0-9]{2}$/); // Valid IP Address
  return dateFormat.test(input);
},
  limitMessage: chalk.red('\nPlease enter your date of birth in (MM-DD-YYYY)/(MM/DD/YYYY)/(MM.DD.YYYY) format and/or provide a valid date of birth.\n')
});

  var year = db.slice(-4);
   year = Number(year);
    if(year%4===0)
      {
          if(year%100===0)
             {
                if(year%400===0)
                   {
                     console.log(chalk.yellow("\nYou were born on a leap year, "+name+"!\nShare this on social media."));
                     
                   }

                 else
                   {
                     console.log(chalk.blue("\nYou were not born on a leap year, "+name+"."));
                   }  
             }

             else
               {
                 console.log(chalk.yellow("\nYou were born on a leap year, "+name+"!\nShare this on social media."));
               }
      }
      
      else
        {
          console.log(chalk.blue("\nYou were not born on a leap year, "+name+"."));
          
        }