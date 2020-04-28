// dice 1
// random number for dice 1
var andom=Math.random();
andom=andom*6;
andom=Math.floor(andom)+1;
if(andom===1)
 {
   document.querySelector("img.dice-1").setAttribute("src","images/dice1.png");
 }
 else if(andom==2)
  {
    document.querySelector("img.dice-1").setAttribute("src","images/dice2.png");
  }
  else if(andom==3)
   {
     document.querySelector("img.dice-1").setAttribute("src","images/dice3.png");
   }
   else if(andom==4)
    {
      document.querySelector("img.dice-1").setAttribute("src","images/dice4.png");
    }
    else if(andom==5)
     {
       document.querySelector("img.dice-1").setAttribute("src","images/dice5.png");
     }
      else
      {
        document.querySelector("img.dice-1").setAttribute("src","images/dice6.png");
      }
// dice-2
// random number for dice 2
var random=Math.random();
random=random*6;
random=Math.floor(random)+1;
if(random==1)
 {
   document.querySelector("img.dice-2").setAttribute("src","images/dice1.png");
 }
else  if(random==2)
  {
    document.querySelector("img.dice-2").setAttribute("src","images/dice2.png");
  }
  else if(random==3)
   {
     document.querySelector("img.dice-2").setAttribute("src","images/dice3.png");
   }
   else if(random==4)
    {
      document.querySelector("img.dice-2").setAttribute("src","images/dice4.png");
    }
   else if(random==5)
     {
       document.querySelector("img.dice-2").setAttribute("src","images/dice5.png");
     }
     else
      {
        document.querySelector("img.dice-2").setAttribute("src","images/dice6.png");
      }
if(andom>random)
{
  document.querySelector("p.result").innerHTML="player 1 has won";
}
else if(andom===random)
{
    document.querySelector("p.result").innerHTML="TIES";
}
else
{
    document.querySelector("p.result").innerHTML="player 2 has won";
}
