$(function(){
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

$(function(){
    $.getJSON('js/users.json', function(user) {
        var user_data = '';
        $.each(user, function(key, value) {
            user_data += 
            "<tr>" +
                `<th scope='row'>${value.id}</th>` +
                `<td>${value.name}</td>` +
                `<td>${value.role}</td>` +
                `<td>${value.active}</td>` +
                "<td>" +
                    `<button>${value.settings[0]}</button>` +
                    "<div>" +
                        `<a href='#'>${value.settings[1]}</a>` +
                        "<div></div>" +
                        `<a href='#'>${value.settings[2]}</a>` +
                        "<div></div>" +
                        `<a href='#'>${value.settings[3]}</a>` +
                    "</div>" +
                "</td>" +
            "</tr>";
        });
        $("#table").append(user_data);

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
    });
});