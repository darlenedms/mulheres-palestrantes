//PURE.js template init
var directive = {
    'article':{
        'mulher<-mulheres':{
            'h3': 'mulher.name',

            '.tags li':{
                'tag<-mulher.interests':{
                    '.': 'tag'
                }
            },

            '.location': 'mulher.location',
            'img.photo@src': 'mulher.photo',
            '.fb a@href': 'https://facebook.com/#{mulher.fb}',

            '.twitter a@href': 'https://twitter.com/#{mulher.twitter}',

            '.github a@href': 'https://github.com/#{mulher.github}',

        }
    }
};

$(function(){
    $.get("mulheres.json", {crossDomain: true}, function(data) {
        var mulheres = data;
        $p('main').render(mulheres, directive);

        enableSearch();
    });
});

function enableSearch() {
    var $search = $('.search'),
        $cards = $('.card'),
        filter;

    $search.keyup(function(e) {
        filter = this.value;

        $cards.find("h3:not(:Contains(" + filter + "))").parent().hide();
        $cards.find("li:not(:Contains(" + filter + "))").parent().parent().hide();

        $cards.find("h3:Contains(" + filter + ")").parent().show();
        $cards.find("li:Contains(" + filter + ")").parent().parent().show();
    });
};

// Cria um Contains para que ele seja case-insensitive e ignore acentuação
jQuery.expr[':'].Contains = function(element, i, arrFilter) {
    var textContent = removeAccents(element.textContent || ""),
        innerText = removeAccents(element.innerText || ""),
        filter = removeAccents(arrFilter[3] || "");

    return (textContent || innerText).indexOf(filter) >= 0;
};

function removeAccents(text) {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&aacute;/g, 'a')
        .replace(/&eacute;/g, 'e')
        .replace(/&iacute;/g, 'i')
        .replace(/&oacute;/g, 'o')
        .replace(/&uacute;/g, 'u')
        .replace(/&ccedil;/g, 'c')
        .replace(/&atilde;/g, 'a')
        .replace(/&otilde;/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[áàã]/g, 'a')
        .replace(/[éèê]/g, 'e')
        .replace(/[íî]/g, 'i')
        .replace(/[óòôõ]/g, 'o')
        .replace(/[úùû]/g, 'u')
        .toLowerCase();
};