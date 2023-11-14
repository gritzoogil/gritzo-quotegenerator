function genQuote() {
    let displayArea = document.getElementById('displayQuote');
    displayArea.style.display = 'none';

    $.ajax({
        url: 'https://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
            method: 'getQuote',
            format: 'jsonp',
            lang: 'en'
        },
        success: function(data) {
            var quoteText = data.quoteText;
            var quoteAuthor = data.quoteAuthor;

            displayArea.innerHTML = '';
            displayArea.innerHTML += '<p>"' + quoteText + '"</p>';
            displayArea.innerHTML += '<p>- ' + quoteAuthor + '</p>';

            displayArea.style.display = 'block';
        },
        error: function() {
            displayArea.innerText = 'Failed to fetch the quote. Please try again. :(';
            displayArea.style.display = 'block';
        }
    });
}
