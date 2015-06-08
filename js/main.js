// Jribbble

$(document).ready(function () {     
    $.jribbble.getShotsByPlayerId('leomaia', function (playerShots) {
        var html = [];
    
        $.each(playerShots.shots, function (i, shot) {
            html.push('<li><a href="' + shot.url + '">');
            html.push('<img src="' + shot.image_teaser_url + '" ');
            html.push('alt="' + shot.title + '"></a></li>');
        });
    
        $('#dribbble').html(html.join(''));
    }, {page: 1, per_page: 4});
});

