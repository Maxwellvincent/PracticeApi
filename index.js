const url = "https://api.github.com/users/:username/repos";

function displayData(data){
    data.map((item) => {
        console.log(item);
        

        $('.display-results').append(`
            <div>
                <h3> ${item.full_name}</h3>
                <a href="${item.url}"> ${item.name} </a>
            </div>
        `)
    })
}


$('#control').on('submit', (e) => {
    $('.display-results').empty();
    e.preventDefault();
    let userInput = $('#user-srch').val();
    console.log(userInput);
    fetch(`https://api.github.com/users/${userInput}/repos`)
    .then(response => response.json())
    .then(responsejson => displayData(responsejson));
})