function getData() {
    fetch("https://api.github.com/users/Shubhangi1-chandra").then((response)=>{
    const data = response.json();
    return data;

}).then((response) => {
    const data = document.getElementById("parent");
    data.innerHTML = response;
})
}
getData();u