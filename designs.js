
$(document).ready(function() {
$('#sizepicker').submit(function (event){
    // To prevent the page from reloading
    event.preventDefault();
    // To remove the previous table created
    $('#pixelCanvas').empty();
    //To run the function when clicked
    makeGrid()
});
/* This function takes values inputed the by user and
assigns the variable names rows and columns each representing the
side respectively. The function later creates tables based on the rows and columns
inserted by the user  */
function makeGrid(){
    let rows = $('#inputHeight').val();
    let columns = $('#inputWeight').val();
    for (let i = 0; i < rows; i++){
        $('#pixelCanvas').append('<tr></tr>');
    }
    for (let j = 0; j < columns; j++){
        $('tr').append('<td></td>');
    }
}
//To Add color to the table cells
$('table').click(function(event){
    let color = $('#colorPicker').val();
    $(event.target).css('background-color', color);
});
});

