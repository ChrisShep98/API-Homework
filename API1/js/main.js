document.querySelector('button').addEventListener('click', getMeal)

function getMeal(){
    let meal = document.querySelector('input').value

     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.meals)
      let name = "Name: ";
      let isAmerican = "Is it American? - ";
      let mealName = data.meals[0].strMeal;
      document.querySelector('h2').innerText = `${name} ${mealName}`;
      document.querySelector('img').src = data.meals[0].strMealThumb;


      if(data.meals[0].strArea == "American"){
        document.querySelector('h3').innerText = `${isAmerican} Yes`;
        document.querySelector('#americanFlag').classList.remove('hidden');
      }else{
        document.querySelector('h3').innerText = `${isAmerican} No`;
        document.querySelector('#americanFlag').classList.add('hidden');
      };

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

