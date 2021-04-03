$("tr th:nth-child(1)").addClass("text-center");

$("tr td:last-child").addClass("text-center dropdown p-0");

$("td button").
    addClass("btn btn-outline-dark dropdown-toggle p-0 w-100 border-0 rounded-0").
    css("height", "49px").
    attr({
        "type": "button",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
    });

$("td div:last-child").addClass("dropdown-menu");

$(".dropdown-menu a:nth-child(odd)").addClass("dropdown-item px-3");

$(".dropdown-menu div:nth-child(even)").addClass("dropdown-divider mx-3");

$(document).ready(function(){
    $("#SearchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});