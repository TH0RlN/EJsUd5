function ocult(opt)
{
   document.getElementById('p' + opt).style = 'display: none'; 
}

document.getElementById('1').addEventListener('click', evt => {ocult(1);});
document.getElementById('2').addEventListener('click', evt => {ocult(2);});
document.getElementById('3').addEventListener('click', evt => {ocult(3);});
