module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("MUSIC", {
    type: "LISTENING",//can be , WATCHING, PLAYING, STREAMING
  });
};
