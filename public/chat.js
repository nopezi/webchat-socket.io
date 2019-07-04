
$(function(){
    //make connection
 var socket = io.connect('http://localhost:3000')

 //buttons and inputs#
 var message = $("#message")
 var username = $("#username")
 var send_message = $("#send_message")
 var send_username = $("#send_username")
 var chatroom = $("#chatroom")
 var feedback = $("#feedback")

 //Emit message
 send_message.click(function(){
     socket.emit('new_message', {message : message.val()})
 })

 //Listen on new_message
 socket.on("new_message", (data) => {
     feedback.html('');
     message.val('');
     if(data.message == "tombol"){
        chatroom.append("<div class='chat'>" + "<div class='chat-avatar'><a class='avatar avatar-online' data-toggle='tooltip' href='#' data-placement='right' title='' data-original-title='June Lane'><img src='https://bootdey.com/img/Content/avatar/avatar2.png' alt='...'><i></i></a><p class='nama_user'>" + data.username + "</p></div><div class='chat-body'><div class='chat-content'><p class='message'>" + data.message + "</p><time class='chat-time' datetime='2015-07-01T11:37'>11:37:08 am</time></div></div></div><div class='chat chat-left'><div class='chat-body'><div class='chat-button'><center><button class='btn btn-default'>button</button></center></div></div></div>")
     }else if(data.message == "hallo"){
        chatroom.append("<div class='chat'>" + "<div class='chat-avatar'><a class='avatar avatar-online' data-toggle='tooltip' href='#' data-placement='right' title='' data-original-title='June Lane'><img src='https://bootdey.com/img/Content/avatar/avatar2.png' alt='...'><i></i></a><p class='nama_user'>" + data.username + "</p></div><div class='chat-body'><div class='chat-content'><p class='message'>" + data.message + "</p><time class='chat-time' datetime='2015-07-01T11:37'>11:37:08 am</time></div></div></div>") 
        chatroom.append("<div class='chat chat-left'><div class='chat-avatar'><a class='avatar avatar-online' data-toggle='tooltip' href='#' data-placement='left' title='' data-original-title='Edward Fletcher'><img src='https://bootdey.com/img/Content/avatar/avatar2.png' alt='...'><i></i></a><p class='nama_user'>Admin</p></div><div class='chat-body'><div class='chat-content'><p>hallo, selamat pagi, ada yang bisa kami bantu ?</p><time class='chat-time' datetime='2015-07-01T11:39'>11:39:57 am</time></div></div></div>")
     }else{
        chatroom.append("<div class='chat'>" + "<div class='chat-avatar'><a class='avatar avatar-online' data-toggle='tooltip' href='#' data-placement='right' title='' data-original-title='June Lane'><img src='https://bootdey.com/img/Content/avatar/avatar2.png' alt='...'><i></i></a><p class='nama_user'>" + data.username + "</p></div><div class='chat-body'><div class='chat-content'><p class='message'>" + data.message + "</p><time class='chat-time' datetime='2015-07-01T11:37'>11:37:08 am</time></div></div></div>")
     }
 })

 //Emit a username
 send_username.click(function(){
     socket.emit('change_username', {username : username.val()})
 })

 //Emit typing
 message.bind("keypress", () => {
     socket.emit('typing')
 })

 //Listen on typing
 socket.on('typing', (data) => {
     feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
 })
});


