$(document).ready(()=>{

    let itemsInCard = 0

    $('#foldOutButton').on('click', function(){
        $('.sidebar form').slideToggle();
    })

    $('main').on('click','div',function(){

        //winkelwagen itemsnum ophogen 
        itemsInCard++
        $('#itemsInCard').text(itemsInCard)

        //hieronder wordt het bedrag op gehaald van de span met de class 'cost'
        //dat is handig voor alls we later moeten filteren (voor nu alleen console output)
        console.log(parseFloat($(this).find('.cost').text()))
        
    })

    // $('.priceFilter input').on('change', function(){
    //     console.log($(this).val())
    // })

    // let maxPriceRange = 10

    // $('main').children('div').each(function() {

    //     if(parseFloat($(this).find('.cost').text())>maxPriceRange){
    //         $(this).hide()
            
    //     }
    //     else{
    //         $(this).show()
    //     }
        
    // });
    
    
})

