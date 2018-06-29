// Select color input
// Select size input

$('#sizepicker').submit(function (event){
    // To prevent the page from reloading
    event.preventDefault();
    // To remove the previous table created
    $('#pixelCanvas').empty();
    //To run the function when clicked
    makeGrid()
});

function makeGrid(){
    const rows = $('#inputHeight').val();
    const columns = $('#inputWeight').val();
    //To create rows based on the entries
    for (let i = 0; i < rows; i++){
        $('#pixelCanvas').append('<tr></tr>');
    }
    //To modify the columns based on the
    for (let j = 0; j < columns; j++){
        $('tr').append('<td></td>');
    }
}

$('table').click(function(event){
    let color = $('#colorPicker').val();
    $(event.target).css('background-color', color);
});

