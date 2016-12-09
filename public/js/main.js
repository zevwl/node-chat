const socket = io();

$('form').on('submit', function() {
    let $message = $('#message');
    socket.emit('message', $message.val());
    $message.val('');
    return false;
});

socket.on('message', function(message) {
    $('.messages-list').append($('<li>').text(message));
});