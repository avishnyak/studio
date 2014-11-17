Studio = require('../../compiled/core/studio');

describe("A message", function() {
  var SENDER_ID = 'sender_message',
    RECEIVER_ID = 'receiver_always_async',
    RECEIVER_ID_ERROR = 'receiver_always_async_error';
  var sender = new Studio.Actor({
    id: SENDER_ID,
    route: SENDER_ID,
    process: function(message, sender) {}
  });
  var receiver = new Studio.Actor({
    id: RECEIVER_ID,
    route: RECEIVER_ID,
    process: function(message, sender) {
      return message;
    }
  });
  var receiverError = new Studio.Actor({
    id: RECEIVER_ID_ERROR,
    route: RECEIVER_ID_ERROR,
    process: function(message, sender) {
      throw new Error();
    }
  });
  it("should always be delivered async in success", function(done) {
    var i = 0;
    sender.send(RECEIVER_ID, 'message').then(function(result) {
      expect(i).toBe(1);
      done();
    });
    i = 1;
  });
  it("should always be delivered async in fail", function(done) {
    var i = 0;
    sender.send(RECEIVER_ID_ERROR, 'message').fail(function(error) {
      expect(i).toBe(1);
      done();
    });
    i = 1;
  });
});