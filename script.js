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

    $('#filterButton').on('click', function(){

        let maxPriceRange = 1000

        if ($('#priceFilter2').prop("checked")) {
            maxPriceRange = 30
        }
        if ($('#priceFilter2').prop("checked")) {
            maxPriceRange = 20
        }
        if ($('#priceFilter1').prop("checked")) {
            maxPriceRange = 10
        }

        $('main').children('div').each(function() {

            if(parseFloat($(this).find('.cost').text())>maxPriceRange){
                $(this).hide()
                
            }
            else{
                $(this).show()
            }
            
        });

    })
    
    
    
})

