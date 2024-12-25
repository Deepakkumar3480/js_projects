(function(){
    const form = document.querySelector('form')
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const message = document.querySelector('.message');
        const content = document.querySelector('.content');
        content.textContent = ` this is your message --   ${message.value}  --`;
        message.value="";
    })
})()