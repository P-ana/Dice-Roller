function rollDice(){
    const numOfDice= document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values=[];
    const images=[];

    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;//random number from 1 to 6
       values.push(value); //array random numbers from numDice
       images.push(`<img src="images/dice${value}.png" alt="Dice${value}"/>` );//ako se slika ne prikaze da pokaze tekst
}

diceResult.textContent = `dice: ${values.join(", ")}`;
diceImages.innerHTML=images.join(" ");

}