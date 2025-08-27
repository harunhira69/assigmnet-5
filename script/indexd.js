// document.getElementById("heart-button-1").addEventListener('click',function(){
    
//   let itemCount = document.getElementById('heart-icon').innerText;
//   let totalCount = Number(itemCount);
//   totalCount++;
//   document.getElementById('heart-icon').innerText = totalCount;

// })


function getElement(id){
    const element = document.getElementById(id)
    return element;
}
function count(id){
  let itemCount = getElement(id).innerText;
  let totalCount = Number(itemCount);
  totalCount++;
  getElement(id).innerText = totalCount;

}

const element1 = getElement('heart-button-1').addEventListener('click',function(){
  count('heart-icon')

})
const element2 = getElement('heart-button-2').addEventListener('click',function(){
count('heart-icon')

})
const element3 = getElement('heart-button-3').addEventListener('click',function(){
count('heart-icon')

})
const element4 = getElement('heart-button-4').addEventListener('click',function(){
 count('heart-icon')

})
const element5 = getElement('heart-button-5').addEventListener('click',function(){
  count('heart-icon')

})
const element6 = getElement('heart-button-6').addEventListener('click',function(){
  count('heart-icon')

})
const element7 = getElement('heart-button-7').addEventListener('click',function(){
count('heart-icon')

})
const element8 = getElement('heart-button-8').addEventListener('click',function(){
  count('heart-icon')

})
const element9 = getElement('heart-button-9').addEventListener('click',function(){
count('heart-icon')

})


//added copy part
const cardBtn = document.getElementsByClassName('copy-btn');
for(let card of cardBtn){
  card.addEventListener('click',function(){
    const cardText = card.parentNode.parentNode.parentNode.parentNode.children[3].innerText;
     navigator.clipboard.writeText(cardText);
    let copyCount =document.getElementById('copy-count').innerText;
    let totalCopyCount = Number(copyCount)

    const finalTotalCount = Number(totalCopyCount + 1)
    const finalCount = document.getElementById('copy-count').innerText = finalTotalCount;
    
    
    alert(`Number copied:${cardText}`)
  })
}

// ...........................................................................................
const cardCall = document.getElementsByClassName('call-card ');
for(const call of cardCall){
  call.addEventListener('click',function(){
   const subTitle = call.parentNode.parentNode.parentNode.parentNode.children[2].innerText;
   const cardNumber = call.parentNode.parentNode.parentNode.parentNode.children[3].innerText;
   const cardTittle = call.parentNode.parentNode.parentNode.parentNode.children[1].innerText;
// ................................................................
const cost = 20;


  const moneyTag = document.getElementById('total-money')
  let money = Number((moneyTag.innerText))
  if(money>=cost){
    money -=cost;
    moneyTag.innerText = money;
    alert(`📞${subTitle}:${cardNumber}`)
     const addCard = document.getElementById('new-card-1')
 const newCard = document.createElement('div')
 newCard.innerHTML = `   <div class="  w-full flex justify-between items-center mt-3 bg-slate-500 p-3 rounded">
    
    <div class="mt-2">
      <h2 class="font-semibold">${cardTittle}</h2>
      <p>${cardNumber}</p>
    </div>

   
    <div>
      <p>${new Date().toLocaleTimeString()}</p>
    </div>
  </div>
 `
               addCard.append(newCard)
  } else{
    alert("❌ You don't have enough coin. You need at least 20 coin");
  }
  
            

   




 
  })
 
}
// ...............................................................................................
const clearHistory = document.getElementById('clear-button').addEventListener('click',function(){
  const newCardContainer = document.getElementById('new-card-1');
  newCardContainer.innerHTML = "";
})

// const historyBtn = document.getElementById('history');
// const cardsContainer = document.getElementById('new-card-1');
// const historySection = document.getElementById('history-section');

// historyBtn.addEventListener('click', function() {
//   // hide cards
//   cardsContainer.style.display = 'none';
  
//   // show history
//   historySection.style.display = 'block';
// });






