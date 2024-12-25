const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click',(e)=>{
        removingActiveClass(e);
        panel.classList.add('active');
    })
})

function removingActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}