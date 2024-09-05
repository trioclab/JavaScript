(function($ , window , document){

    $(function(){
        $('input').on('change', function(){
            let inputValue = $(this).val();
            let div = $('<div>').text(inputValue); 
            // div.append(div); 
        });
    });

}(window.jQuery, window , document));