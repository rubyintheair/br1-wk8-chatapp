function setupRoom(roomId) {
  App.chat = App.cable.subscriptions.create(
    {channel: "ChatChannel", id: roomId},
    {
      connected: function() {
        // Called when the subscription is ready for use on the server
      },

      disconnected: function() {
        // Called when the subscription has been terminated by the server
      },

      received: function(data) {
        // Called when there's incoming data on the websocket for this channel
        console.log("#ChatChannel received: ", data);
        $(".js-chat-messages").append(data.html);
      }
    }
  );
}
