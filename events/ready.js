const activities_list = [
    "QUERY", 
    "SUGGESTIONS",
    "COMPLAINS", 
    "MUSIC",
    "BFA"
    ];

module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
await setInterval(() => {
          const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
          client.user.setActivity(activities_list[index], { type: 'LISTENING' }); // sets bot's activities to one of the phrases in the arraylist.
      }, 10000); // Runs this every 10 seconds.
};



