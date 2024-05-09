console.log("hello");

if(jQuery) {
    console.log("jquery loaded")
}

else {
    console.log("no jquery")
}


$('#close').click(function() {
    $(this).parent().hide();
    
            //Function after window is closed 
            yourfunction(); 
});



$('#click').click(function() {
     $('#banner').show();   
});

$('#test').click(function() {
    alert('You have joined the crew!');
})