 - NOT : Self bot usage is prohibited by Discord. If your account is terminated by Discord, the responsibility lies with you.

 - First, open Discord and press the F12 key to open the developer tools console. Click on the "Network" tab.

 - Next, type some random text in a server on Discord. Then, click on your own username.

 - In the "Network" tab, click on a tab called "Science" and scroll down the page.

 - Find the "Authorization:" text and you will see your user token in the adjacent area. Copy this token.

 - Next, download the provided file and open the .env file inside it. In the .env file, you will find an entry abtin=. Paste your token  on the right side of this entry.

 - Now, go to https://discord.com/developers/applications and create a bot or copy the CLIENT ID of your existing bot. Paste this CLIENT ID into the entry clientId= in the .env file and save it.

 - Open the index.js file and go to line 18. Enter the text you want to display after largeText:.

 - Then, in the index.js file, go to line 19. After image:, enter the name of the photo you want to use in your bot's Rich Presence. If the photo doesn't exist, add it, otherwise, it won't work. Save the file after adding the photo.

 - Now, open the terminal, type npm i to install the necessary modules. After the modules are installed, type node index to run the bot.
