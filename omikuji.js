
const a=['大吉','中吉','小吉'];

function kuji(){
    const resultMessage=document.getElementById('result');
    const number=randamu();
    resultMessage.textContent=`今日の運勢は${a[number]}です`;
}
function randamu(){
    return Math.floor(Math.random()*a.length);
}