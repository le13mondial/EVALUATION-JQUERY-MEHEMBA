$(document).ready(function(){

// FONCTION DE LA NAVBAR

$('.navbar-nav li a').click(function (){
    
        
    var testClass=$(this).hasClass('gray')

    if (testClass===true){
     return false
    } else {
        $(this).parent().siblings().children().removeClass('gray')
          $(this).addClass('gray') 
    }

   });

//  FONCTION POUR DONNER LA TOTALITE DU PRIX PAR LE CLIENT DANS LE MODAL

//    const toastTrigger = document.getElementById('liveToastBtn')
//    const toastLiveExample = document.getElementById('liveToast')
//    if (toastTrigger) {
//      toastTrigger.addEventListener('click', () => {
//        const toast = new bootstrap.Toast(toastLiveExample)
   
//        toast.show()
//      })
//    }
   
//    document.querySelector("#liveToastBtn").addEventListener('click',function(){
   
//    var somme=0
//      allCard.forEach(card => {
     
//        var boutonCard=card.children[1].children[2]
//        var like=boutonCard.children[0].textContent
        
//        somme=somme+parseInt(cart.children[1].children[2].children[0].textContent)
   
//        document.querySelector('.like').textContent=somme
//         });
//    })

// });



// FONCTION POUR AJOUTER +1 AU PRIX

// var allCard=document.querySelectorAll('.card')


//  allCard.forEach(cart => {
  
// var boutonCard=cart.children[1].children[2]   //nous avons ici tous les parents avant d'arriver au bouton
// var like=boutonCard.children[0]

// console.log(like);


// boutonCard.addEventListener('click',function(){


//   var b=parseInt(like.textContent)+1

//   like.textContent=b
//  })

// });


// FONCTION POUR DONNER LE PRIX TOTAL DE POULET DG

 var para=document.querySelector('.p')
 var input=document.querySelector('.span')


 para.forEach(cart => {
  
// var input=p.children[0]    
var input=p.children[1]

console.log(input);


input.addEventListener('click',function(){


  var b=parseInt(span.textContent)+1

  span.textContent=b

    })

  })

});