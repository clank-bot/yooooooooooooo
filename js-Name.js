function addUser ()
{
    player1_login = document.getElementById("player1_name_input").value;
    player2_login = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player 1 Name",player1_login);
    localStorage.setItem("Player 2 Name",player2_login);

    window.location = "yooooo.html";
}