var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
class MemoryGame{
  constructor(cards){
  this.cards = cards;
  this.arr = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}
shuffleCards(cards) {
  let arrPush = [];
  for(let i = this.cards.length; i > 0; i--){
  let randomCardIndex = Math.floor(Math.random()*(i));
  arrPush.push(this.cards[randomCardIndex]);
  this.cards.splice(randomCardIndex,1);  
  }
  this.cards = arrPush;
  console.log(this.cards);
};

checkIfPair(){
  this.pairsClicked++;
  if(this.arr[0].attr("name") === this.arr[1].attr("name")){
    this.pairsGuessed++;
    this.arr = [];
    this.isFinished();
    $('.back').removeClass('blocked');
  }else{
    setTimeout(()=>{
    this.arr[0].show();
    this.arr[1].show();
    this.arr[0].siblings().removeClass('back');
    this.arr[1].siblings().removeClass('back');
    this.arr = [];
    $('.back').removeClass('blocked');
  },800)
  }
}

isFinished(){
if(this.pairsGuessed === 12){
  setTimeout(()=>{
    alert('you won the game');
  },1)
}
}
}