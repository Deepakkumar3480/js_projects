const cards = document.querySelectorAll('.memory-card')
let hasFlippedCard = false;
let lockboard = false;
let firstCard,secondCard;
function flipcard(){
    // console.log(this); 
    if(lockboard) return;
    this.classList.toggle('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        // second click
    hasFlippedCard = false;
    secondCard = this;
    checkformatch();
    }


function checkformatch(){
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        // it's a match!
        disablecards()
      } else {
        // not a match
        unflipcards()
      }
}

function disablecards(){
    firstCard.removeEventListener('click', flipcard);
        secondCard.removeEventListener('click', flipcard);
}
function unflipcards(){
    lockboard=true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockboard=false;
      }, 1000);
}

cards.forEach(card=>card.addEventListener('click',flipcard));