var card=document.getElementById("card")
var total=document.getElementById("total")
var message=document.getElementById("message")
var ctotal=document.getElementById("ctotal")

var pcard=[]
var sum=0
var sum1=0
var win=false
var game=true
var startg=false
var player=prompt("Enter Player Name:")
var amount=prompt("Enter The amount")
function getrandom()
{
    
    var ran=Math.floor(Math.random()*13+1)
    if(ran >10)
    {
        return 10
    }
    else if(ran==1)
    {
        return 11
    }
    else
    {
        return ran
    }
}
function start()
{
    startg=true
    var num1=getrandom()
    var num2=getrandom()
    var num3=getrandom()
    var num4=getrandom()
      sum=num1+num2
      sum1=num3+num4
      pcard=[num1,num2]
      render()
}
function render()
{
    card.innerHTML="Cards :"
    for(var i=0;i<pcard.length;i++)
    {
        card.innerHTML+=`  ${pcard[i]}`
    }
    total.innerHTML= `PLayer Total : ${sum}`
    ctotal.innerHTML=`Computer Total :${sum1}`
    if(sum==21)
    {
        amount *=2
        message.innerHTML=`Congratulation ${player} you Won Rs.${amount}`
        win=true
    }
    else if(sum<21)
    {
        message.innerHTML="You Need Another card"

    }
    else if (sum>21) 
    {
        message.innerHTML=`Soory ${player} U Lost ${amount} because u lost the Game`
        game=false

    } 
}
function newcard()
{
    
    if(win==false && game==true && startg==true)
    {
    var num=getrandom() 
    pcard.push(num)
    sum+=num
    while(sum1<17)
    {
      var cnum=getrandom()
      sum1+=cnum 
    }
    render()
    if(sum>21)
      {
       winner()
      }
    }
}
function winner()
{
    if(startg==true)
    {
    while(sum1<17 && sum1<sum)
    {
      var cnum=getrandom()
      sum1+=cnum 
    }
    ctotal.innerHTML=`Computer Total: ${sum1}`
    if(sum>21 || sum1<=21 && sum1>sum)
    {
        message.innerHTML=`Soory ${player} U Lost ${amount} because u lost the Game`
    }
    else if(sum==sum1)
    {
        message.innerHTML="Its a Draw..."

    }
    else{
        amount *=2
        message.innerHTML=`Congratulation ${player} you Won Rs.${amount}`

    }
    game=false
}
}

    
