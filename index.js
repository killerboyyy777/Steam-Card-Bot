
// Copyright notice:

/*--------------------------------------------------------------------------------------------- 
* Original work: Copyright (c) 2020-2024 Refloow All rights reserved.

* Code origin: https://github.com/Refloow/Steam-Card-Bot-PRO
* New Code origin: https://github.com/killerboyyy777/Steam-Card-Bot-PRO
* Developer name: Veljko Vuckovic
* Licensed under the MIT License. See LICENSE in the project root for license information.
* Published License: https://github.com/Refloow/Steam-Card-Bot-PRO/master/LICENSE

* Contact information:

  Fork Discord Support Server: discord.gg/MFQnYm2f2d
  Fork Developer Steam: https://steamcommunity.com/id/klb777/
  
  Original Discord Support Server: https://discord.gg/D8WCtDD
  Original Main developer steam: https://steamcommunity.com/id/MajokingGames/ 
  Original Developer Mail: refloowlibrarycontact@gmail.com

* Donations(Original Developer):
  Crypto: https://refloow.com/cdonate
  Steam: https://steamcommunity.com/tradeoffer/new/?partner=994828078&token=XEUdbqp6

* Donations(Fork Developer):
  Crypto(XMR): 47PiRtJbaJRd6sSvipHG98DoY3krAxbCu4KvHSCnyNBSVM3L6Sbpk8x8Tcqkrc4vdsbhmBj12Yjcw9tJcJMA4nTNU2qavrE
  Steam: https://steamcommunity.com/tradeoffer/new/?partner=1211192445&token=T9Hiu3Oz
  
 --------------------------------------------------------------------------------------------*/

 /* 

// legal advice: PERMISSIONS AND RIGHTS

* License does not prohibit modification, distribution, private/commercial use or sale of copies as long as the original LICENSE file
 and authors copyright notice are left as they are in the project files.
* Copyright notice could be included ones or multiple times within the file.
* Copyright notice should not be removed even within the larger works (Larger modifications applied).
* Original file tags cannot be removed without creators exclusive permission.
* Adding own tags in files is possible in case of modification - even in that case original tags must be kept.
* Year on the copyright notice breakdown:
* Generally, the “year of first publication of the work” refers to the year in which the work was first distributed to the public (first year mentioned)
* Any year after represents the year of added modifications.
* Copyright cannot expire so therefore you cannot remove copyright notice if its not updated to the latest year.
* Editing existing copyright notice(s) is also prohibited.

===================================================================================
Removing copyright notice & distributing, using or selling the software without
the original license and copyright notice is licence agreement breach and its considered criminal offense and piracy.
===================================================================================

*/
	



// Checking if all modules are correctly installed

try {
  colors = require('colors');
  fetch = require('node-fetch');
  request = require('request');
  diagnostics = require('scb-diagnostics');

} catch (ex) {
  // If modules are not installed showing an clear error message to user.
  console.log(`\n\n\n| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install. (run install.bat file) \n\n\n`);
  console.log(ex);
  process.exit(1);
}

// Defining additional
const package = require('./package.json');
const method = require('./app/methods.js');
const config = require('./app/SETTINGS/config.js');
const v = package.version;

function initialize() {
// Basic display information on app start

// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
/////////////////////////////////////////////////////////////////////

// COPYRIGHT NOTICE. DO NOT EDIT & REMOVE
//  ONCE AGAIN:

//       Removing copyright notice & distributing, using or selling the software without
// the original license and notice above is license agreement breach and its considered criminal offense.

  console.log(`\n\n                    (((((((                `.cyan);
  console.log(`                 (((((((((((((((              `.cyan);
  console.log(`              ((((((((((((((((((((((.           `.cyan);
  console.log(`          ((((((((((.        ((((((((((((       8888888b.          .d888888      -Killerboy777 Fork      `.cyan);
  console.log(`        (((((((((    ,((((((    ((((((((((      888   Y88b        d88P" 888                              `.cyan);
  console.log(`        (((((((((((   ((((((((   (((((((((      888    888        888   888                              `.cyan);
  console.log(`        (((((((((((   (((((    /((((((((((      888   d88P .d88b. 888888888 .d88b.  .d88b. 888  888  888`.cyan);
  console.log(`        ((((((((((.  (      ((((((((((((((      8888888P" d8P  Y8b888   888d88""88bd88""88b888  888  888`.cyan);
  console.log(`        ((((((((((   %%%%%     (((((((((((      888 T88b  88888888888   888888  888888  888888  888  888`.cyan)
  console.log(`        (((((((%%%   %%%%%%%%*     (((((((      888  T88b Y8b.    888   888Y88..88PY88..88PY88b 888 d88P`.cyan)
  console.log(`        (((#%%%%%%%  %%%%%%%%%%%%   %%%(((      888   T88b "Y8888 888   888 "Y88P"  "Y88P"  "Y8888888P"`.cyan)
  console.log(`        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.       888   T88b "Y8888 888   888 "Y88P"  "Y88P"  "Y8888888P"`.cyan)
  console.log(`            %%%%%%%%%%%%%%%%%%%%%%%%%           `.cyan)
  console.log(`                 %%%%%%%%%%%%%%%%               `.cyan)
  console.log(`                     %%%%%%%%                   \n` .cyan)
  console.log(
    "                               ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀".red
  );                             
console.log('        This software has been developed by Veljko Vuckovic at - Refloow and published for free at GitHub.org'.cyan);
console.log('                           Code origin: https://github.com/Refloow/Steam-Card-Bot-PRO' .yellow);
console.log('                        Original work: Copyright (c) 2020-2024 Refloow All rights reserved. ' .green);
console.log('                        Forked by killerboyyy777 on Github:https://github.com/killerboyyy777/Steam-Card-Bot-PRO. ' .green);
console.log('     (Original) Official version of the bot is FREE with security updates only! Due economic situation and lack of support\n         newer versions can be purchased on our official discord server: https://discord.gg/XZtwJ4WW6T');
console.log('   Or just use this FREE Fork and join our Community Discord discord.gg/MFQnYm2f2d. ' .green);
console.log(	
    "                               ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n".red
  );
  console.log(
    "                      Removing copyright notice above & distributing, using or selling the software without \n           the original license and notice above is licence agreement breach and its considered criminal offense.\n"
      .yellow
  );
  console.log(
    "Please read the notice above, app will start in 15 secounds (restarting fast can result in being rate limited by steam)\n"
  );
/////////////////////////////////////////////////////////////////////
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
}

function resume() {
console.log(`Verision v${v} PRO` .cyan);
console.log('Loading config file...'.green );
console.log('Starting LevelUp bot...'.green );
console.log('If bot doesnt start in next 1 minute steam is down.\n'.green );

console.log('If you are running app for the first time wait a bit for app to initialize.\n\n'.cyan);

function call() {
    setInterval(getit, config.showtimer);
}

function getit() {
  diagnostics.getusage();
}

if(method.CheckData()) {
  call();
}

// Steam-Card-Bot-PRO built by Refloow (-MajokingGames) and forked and Improved by killerboy777

// Starting app file
try {
require('./app/app.js');
} catch (ex) {
  // If modules are not installed showing an clear error message to user.
  console.log(`\n\n\n| [APP.JS] |: Looks like there is an fatal error that kills the app, check your configuration error is down below: \n\n\n`);
  console.log(ex);
  process.exit(1);
}

}


// Starting the app
initialize();

// Do not recommend changing
// Awaiting a little bit in case of app restarting itself or restarting by command, it will wait some time before accessing steam to prevent steam blocking connection
setTimeout(resume, config.STARTAWAIT);


// Copyright notice:

/* Original work: Copyright (c) 2020-2024 Refloow All rights reserved.
  Original Code origin (Free GitHub publish): https://github.com/Refloow/Steam-Card-Bot-PRO
  Forked by killerboy777 2025
  Fork Code Origin: https://github.com/killerboyyy777/Steam-Card-Bot-PRO*/


