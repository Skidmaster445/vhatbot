document.addEventListener('DOMContentLoaded', (event) => {
    let chatbox = document.getElementById('chatbox');
    let botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = "hello i am walter a bot made by the c00l guy interna1";
    chatbox.appendChild(botMessage);
});

function sendMessage(event) {
    if (event.key === 'Enter') {
        let userInput = document.getElementById('userInput').value;
        let chatbox = document.getElementById('chatbox');

        if (userInput.trim() !== "") {
           
            // you don't need to be here
            
            let userMessage = document.createElement('div');
            userMessage.className = 'message user';
            userMessage.textContent = userInput;
            chatbox.appendChild(userMessage);

            // why are you still here
            document.getElementById('userInput').value = '';

            // leave already
            setTimeout(() => {
                let botMessage = document.createElement('div');
                botMessage.className = 'message bot';
                botMessage.textContent = getBotResponse(userInput);
                chatbox.appendChild(botMessage);
                chatbox.scrollTop = chatbox.scrollHeight;
            }, 1000);
        }
    }
}

function getBotResponse(input) {

    input = input.toLowerCase();
    if (input.includes("hello")) {
        return "Hi there!";
    } else if (input.includes("how are you")) {
        return "I'm just a bunch of code, but I'm here to help you!";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm not sure what you mean. Can you try asking something else?";
    }
}
