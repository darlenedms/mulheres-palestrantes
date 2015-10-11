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
            'img.photo@src': function(){
                return this.photo || generateGravatarUrl(this.email);
            },
            '.fb a@href': 'https://facebook.com/#{mulher.fb}',
            '.fb@class': function(){
                return this.fb ?  "" : "hidden";
            },
            '.twitter a@href': 'https://twitter.com/#{mulher.twitter}',
            '.twitter @class': function(){
                return this.twitter ?  "" : "hidden";
            },
            '.github a@href': 'https://github.com/#{mulher.github}',
            '.github @class': function(){
                return this.github ?  "" : "hidden";
            }
        }
    }
};

$(function(){
    $.get("mulheres.json", {crossDomain: true}, function(data) {
        $p('main').render(data, directive);
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
        $cards.find("p:not(:Contains(" + filter + "))").parent().hide();
        $cards.find("li:not(:Contains(" + filter + "))").parent().parent().hide();

        $cards.find("h3:Contains(" + filter + ")").parent().show();
        $cards.find("p:Contains(" + filter + ")").parent().show();
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

function generateGravatarUrl(email){
    var hash = md5(email);
    var placeholderImagePath = "http://insideoutproject.xyz/mulheres-palestrantes/img/placeholder-female.jpg";
    var imageURL = "https://secure.gravatar.com/avatar/" + hash + "?r=PG&d=" + placeholderImagePath;
    return email ? imageURL : placeholderImagePath;
}