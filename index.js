

function displayResults(responseJson) {
    console.log('displayResults ran')
    $('#results').removeClass('.hidden');
    for (let i = 0; i < responseJson.length; i++) {
    console.log(responseJson[i].html_url)
    $('#js-results').append(`
    <li><h3>"${responseJson[i].name}"</h3>
    <p>Repo --> <a href="${responseJson[i].html_url}">${responseJson[i].name} link</a></p></li>`);
    }
}

function watchForm() {
    console.log('watchForm ran')
    $('#js-form').submit(event => {
        event.preventDefault();
        $('#js-results').empty()
        const username = $("#js-username").val();
        const searchURL = `https://api.github.com/users/${username}/repos`
        console.log(searchURL)
        fetch(searchURL)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson));
    });
}

$(watchForm)

