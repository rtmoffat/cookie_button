function submit() {
    fetch("./cookie")
        .then(response => response.text())
        .then(result => {
            document.getElementById('results').innerHTML+=result+'&nbsp;';
        })
        .catch((error) => {
            alert('wtf '+error);
        })
}