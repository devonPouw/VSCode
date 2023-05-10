
function choiceHandling(choice){
    let output = "";
    const arr = ["Rock", "Paper", "Scissors"];
    let computer = arr[Math.floor(Math.random() * arr.length)];
    if((choice == "Rock" && computer == "Scissors")
    || (choice == "Paper" && computer == "Rock")
    || (choice == "Scissors" && computer == "Paper")){
    output = "Win"
    }else if(choice != computer){
        output = "Lose"
    }else{
        output = "Draw"
    }
    document.getElementById("player").innerText = choice
    document.getElementById("bot").innerText = computer
    document.getElementById("result").innerText = output
}
