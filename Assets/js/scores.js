function printScores(){
    var highScore = JSON.parse(localStorage.getItem("highScore")) || []; 
    highScore.sort(function(a,b){
        return b.score - a.score;
    })
    var olElement = document.getElementById("highScore")
    highScore.forEach(element => {
        var litag = document.createElement("li")
        litag.textContent = element.initial + " - " + element.score
        olElement.appendChild(litag)

    });
    document.getElementById("clear").onclick = clearScore
}
printScores()

function clearScore(){
    localStorage.removeItem("highScore")
    window.location.reload()

}