() => {
let from404;
window.onload = () => {
    from404 = false;
};
if(document.getElementById('from') == "from404"){
    from404 = true;
    document.getElementById('from404').innerHTML = "You Came This Page From 'Error 404' Page!"
}}