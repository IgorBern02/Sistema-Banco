// let inputSearch = document.getElementById("inputSearch");

// function showSearch() {
//     if(inputSearch.style.display === "none"){
//         inputSearch.style.display = "flex"
//     } else {
//         inputSearch.style.display = "none"
//     }
// }

$('#searchImg').on('click', () => {
    if(inputSearch.style.display === "none"){
        inputSearch.style.display = "flex",
        inputSearch.style.opacity = "1"
        } else {
        inputSearch.style.display = "none"
        }
});