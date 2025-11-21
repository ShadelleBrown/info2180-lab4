document.addEventListener('DOMContentLoaded', function() {
    //search button element referenced to 
    const searchBtn = document.getElementById('searchBtn');
    
    //click event listener added to the search button
    searchBtn.addEventListener('click', function() {

        //fetch API used to make AJAX request to superheroes.php
        fetch('superheroes.php')
            .then(response => response.text()) //response converted to text
            .then(data => {
                alert(data); //alert box used to display superhero data 
            })
            .catch(error => {
                console.error('Error:', error); //any possible errors logged to the console 
            });
    });
});