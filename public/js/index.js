let socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Darek',
        text: 'This is a client message'
    });

});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage: ', message)
});
