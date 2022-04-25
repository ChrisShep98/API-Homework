document.querySelector('button').addEventListener('click', getMeal)

function getMeal(){

     fetch(`https://api.aakhilv.me/fun/wyr`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data
      let getRidOfWyr = data[0].slice(17)
      let firstAnswer = getRidOfWyr.substring(getRidOfWyr.indexOf(''), getRidOfWyr.indexOf(' or '))
      let secondAnswer = getRidOfWyr.substring(getRidOfWyr.indexOf(' or ') + 4)
      let realSecondAnswer = secondAnswer.slice(0, -1)

      document.querySelector('.firstAnswer').innerText = `${firstAnswer}`
      document.querySelector('.secondAnswer').innerText = `${realSecondAnswer}`

      document.querySelector('.runAgain').addEventListener('click', getMeal)
      document.querySelector('.runAgain1').addEventListener('click', getMeal)
      
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

