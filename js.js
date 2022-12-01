function ocult(opt)
{
   if(document.getElementsByClassName('text')[opt].style.display != 'none')
   {
      document.getElementsByClassName('text')[opt].style.display  = 'none';
      document.getElementsByClassName('link')[opt].innerHTML      = 'Mostrar contenidos';
   }
   else if(document.getElementsByClassName('text')[opt].style.display == 'none')
   {
      document.getElementsByClassName('text')[opt].style.display  = 'block';
      document.getElementsByClassName('link')[opt].innerHTML      = 'Ocultar contenidos';
   }
}

var links = document.getElementsByClassName('link');

for (let i = 0; i < links.length; i++)
   links[i].addEventListener('click', evt => {ocult(i);});
