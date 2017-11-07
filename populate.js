//JQuery plugin to populate a select box
$.fn.populate = function (dataArray) {
    var $selectbox = $(this);
    // check if element is of type select
    if ($selectbox.is("select")) {
        $.each(dataArray, function (i, data) {
            $selectbox.append('<option value="' + data + '">' + data + '</option>');
        });
    }
};

$(document).ready(function () {
    var dataArray = ["one", "two", "three", "four", "five"];

    $('#myselect').populate(dataArray);
});