player_1_name = localStorage.getItem("p_1");
player_2_name = localStorage.getItem("p_2");
document.getElementById("player_1_name").innerHTML = player_1_name + " : ";
document.getElementById("player_2_name").innerHTML = player_2_name + " : ";
var player1_score = 0;
var player2_score = 0;
document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;

function send() {
   num1=document.getElementById("num1").value;
   num2=document.getElementById("num2").value;
ques=num1+" + "+num2
    QWord = "<h4 id='word_display'>Q. " + ques + "</h4>";
    inputBox = "<br> Answer: <input type='text' id='input_check_box'>";
    checkButton = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row = QWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;


}
qusTurn = "p_1";
ansTurn = "p_2";
function check() {
    getAns = document.getElementById("input_check_box").value;
    
    if (getAns == (num1+num2)) {
        if (ansTurn == "p_1") {
            player1_score += 1;
            document.getElementById("player_1_score").innerHTML = player1_score;
            ansTurn = "p_2";
            qusTurn = "p_1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
        } else {
            player2_score += 1;
            document.getElementById("player_2_score").innerHTML = player2_score;
            ansTurn = "p_1";
            qusTurn = "p_2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name;
        }
    }else{
        if (ansTurn == "p_1") {
           
            ansTurn = "p_2";
            qusTurn = "p_1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
        } else {
            
            ansTurn = "p_1";
            qusTurn = "p_2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name;
        }
    }
    document.getElementById("output").innerHTML="";
}