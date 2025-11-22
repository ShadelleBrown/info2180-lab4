//waiting for page to be loaded completely before running:
document.addEventListener('DOMContentLoaded', function() {

    //search button, input field, and result div are referenced to
    const searchBtn = document.getElementById('searchBtn');
    const searchField = document.getElementById('searchField');
    const resultDiv = document.getElementById('result');
    
    //click event listener added to the search button
    searchBtn.addEventListener('click', function() {

        // Getting the search query from the input field 
        const query = searchField.value.trim(); //trimming whtespace
        
        // Sanitizing the input
        const sanitizedQuery = encodeURIComponent(query);
        
        // AJAX request URL
        let url = 'superheroes.php';
        
        // Adding a query parameter if there's a search query
        if (query !== '') {
            url += '?query=' + sanitizedQuery;
        }
        
        // using the fetch API to make AJAX request
        fetch(url)
            .then(response => response.text()) // Converting response to text
            .then(data => {
                
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                // log and display an error message if there's an error
                console.error('Error:', error);
                resultDiv.innerHTML = '<p style="color: red;">An error occurred while fetching data.</p>';
            });
    });
});