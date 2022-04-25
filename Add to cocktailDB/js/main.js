
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions

      let drinkData = data.drinks;
      let drinkDetails = [];
      for (let index = 1; index < 16; index++) {
        if (
          drinkData[0][`strIngredient${index}`] &&
          drinkData[0][`strMeasure${index}`]
        ) {
          drinkDetails.push(
            drinkData[0][`strIngredient${index}`] +
              ": " +
              drinkData[0][`strMeasure${index}`]
          );
        } else if (drinkData[0][`strIngredient${index}`]) {
          drinkDetails.push(drinkData[0][`strIngredient${index}`]);
        }
      } 
      console.log(drinkDetails);
      document.querySelector('h4').innerText = drinkDetails
      
    })

    .catch(err => {
        console.log(`error ${err}`)
    });

}

