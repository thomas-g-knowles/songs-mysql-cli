<=---------------- About command line interface database project ----------------=>

App Summary: takes song information and stores it in a MySQL database, CRUD operations can be used to read and write within the database tables.

This application takes argument vectors upon script exectution: it requires a CRUD operation argument and additional song information arguments (excluding drop operation). For more information and use cases, see CLI APP USE section:

Whilst the application trys to guide the user when incorrect/invalid commands are entered, it is not feasible to cover for every possibility (basically I am too lazy and strongly detest mountains of selection), therefore this README should be referred to for further guidance if needed.

Note: Command line accepts all cases - all keys are converted to lower anyway. However values are case sensitive, for example to allow for two songs of the same name with different casing.
Note: Adding/specifying the same argument more than once will result in nothing being done with it, as the app is not programmed to parse 2D argument vectors - one argument at a time.
Note: Giving two CRUD arguments at once may result in unexpected results and is not recommended - the CLI application was not built to be used in such ways.
Note: Be aware that collection documents can be duplicates (obviously will posess unique ID's) - adding identical data more than once IS allowed.
Note: App can be started using either npm start -- (arguments go after initial dashes) or node index.js
Note: CAPS in descriptions defines arguments.

<=--------------------------------- CLI APP USE ---------------------------------=>

-------- CRUD Arguments for User -------- :

• --add users: creates a new app user in users table - takes FIRSTNAME, SECONDNAME, USERNAME and PASSWORD as arguments.

EXAMPLE: --add users --firstname John --secondname Johny -- username user123 --password password123

===>>> note: all arguments are REQUIRED and therefore an error will be thrown if not all are supplied with valid data.

• --update: changes the specified user data, being either username or password - takes TO as an arugument.

EXAMPLE: --change password --to newpassword123

===>>> note: obviously a user must be logged in for the changes to be applied.

• --remove account: (!-WARNING-!) deletes the currently logged in user from the app - takes no additional arguments.

EXAMPLE: --remove account

===>>> note: --list can be set to "all" (--list all) to retrieve all documents currently present in the database collection.

-------- CRUD Arguments for Songs -------- :

• --add songs: places song info into the database collection - takes SONG, ALBUM, ARTIST and GENRE as arguments.

EXAMPLE: --add --song "My Song" --artist "Me"

===>>> note: as --album and --genre have not been defined/given, they are added anyway for consistency and semantics sake as undefined, which later becomes type "null" in the database collection.

• --list: returns all instances/documents featuring the requested/filtered data in the same document from the database collection - takes SONG, ALBUM, ARTIST and GENRE as arguments.

EXAMPLE: --list --genre "Metal" --artist "Machine Head"

===>>> note: --list can be set to "all" (--list all) to retrieve all documents currently present in the database collection.
===>>> note: every document match that is found is pushed to an array, with every search result - this array is returned and logged to the command line/console.

• --update: updates specified song data within the database collection (if it can be found) - takes SONG, ALBUM, ARTIST, GENRE and WITH as arguments.

EXAMPLE: --update "genre" --artist "In Flames" --genre "Rock" --with "Metal"

===>>> note: --update should be given the key value to change. --with is what you want the data to be updated to. Any other arguments grab the document(s) which are to be targeted for the update(s).

• --remove: removes any document containing any part of the specified song data within the database collection (if it can be found) - takes SONG, ALBUM, ARTIST and GENRE as arguments.

EXAMPLE: --remove

• --drop: (!-WARNING-!) deletes the database collection - takes no additional arguments/song info.

EXAMPLE: --drop