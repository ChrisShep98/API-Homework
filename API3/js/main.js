document.querySelector('button').addEventListener('click', getData)

function getData(){

let URL = `https://strangerthings-quotes.vercel.app/api/quotes`
// let realURL = `https://animechan.vercel.app/api/quotes/anime?title=naruto`


     fetch(URL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log(data[0].author)
      


      const author = data[0].author
      console.log(author)
      
      // let firstName = author.substring(0, author.indexOf(" "))
      // let lastName = author.substring(author.indexOf(" ") + 1 )
    
      

      const eleven = document.querySelector('#eleven')
      const jimHopper = document.querySelector('#jim-hopper')
      const dustinHenderson = document.querySelector('#dustin-henderson')
      const ericaSinclair = document.querySelector('#erica-sinclair')
      const johnByers = document.querySelector('#jonathan-byers')
      const keith = document.querySelector('#keith')
      const lucasSinclair = document.querySelector('#lucas-sinclair')
      const maxMayfield = document.querySelector('#max-mayfield')
      const mikeWheeler = document.querySelector('#mike-wheeler')
      const mrClarke = document.querySelector('#mr-clarke')
      const nancyWheeler = document.querySelector('#nancy-wheeler')
      const robinBuckley = document.querySelector('#robin-buckley')
      const steveHarrington = document.querySelector('#steve-harrington')
      const joyceByers = document.querySelector('#joyce-byers') 
      const samOwens = document.querySelector('#sam-owens')
      const willByers = document.querySelector('#will-byers')
      const kaliPrasad = document.querySelector('#kali-prasad')
      const murrayBauman = document.querySelector('#murray-bauman')
      const billyHargrove = document.querySelector('#billy-hargrove')
      const florance = document.querySelector('#florance') 

      

      
      document.querySelector('h2').innerText = data[0].quote 

      

      if(author == "Eleven"){
        eleven.classList.remove('hidden')
      }else if(author !== "Eleven")
          eleven.classList.add('hidden')

      if(author == "Jim Hopper"){
        jimHopper.classList.remove('hidden')
      }else if(author !== "Jim Hopper")
          jimHopper.classList.add('hidden')

      if(author == "Dustin Henderson"){
        dustinHenderson.classList.remove('hidden')
      }else if(author !== "Dustin Henderson")
        dustinHenderson.classList.add('hidden')

      if(author == "Erica Sinclair"){
        ericaSinclair.classList.remove('hidden')
      }else if(author !== "Erica Sinclair")
        ericaSinclair.classList.add('hidden')
      
      if(author == "Jonathan Byers"){
        johnByers.classList.remove('hidden')
      }else if(author !== "Jonathan Byers")
        johnByers.classList.add('hidden')

      if(author == "Keith"){
        keith.classList.remove('hidden')
      }else if(author !== "Keith")
        keith.classList.add('hidden')

      if(author == "Lucas Sinclair"){
        lucasSinclair.classList.remove('hidden')
      }else if(author !== "Lucas Sinclair")
        lucasSinclair.classList.add('hidden')

      if(author == "Max Mayfield"){
        maxMayfield.classList.remove('hidden')
      }else if(author !== "Max Mayfield")
        maxMayfield.classList.add('hidden')
      
      if(author == "Mike Wheeler"){
        mikeWheeler.classList.remove('hidden')
      }else if(author !== "Mike Wheeler")
        mikeWheeler.classList.add('hidden')

      if(author == "Mr. Clarke"){
        mrClarke.classList.remove('hidden')
      }else if(author !== "Mr. Clarke")
        mrClarke.classList.add('hidden')

      if(author == "Nancy Wheeler"){
        nancyWheeler.classList.remove('hidden')
      }else if(author !== "Nancy Wheeler")
        nancyWheeler.classList.add('hidden')

      if(author == "Robin Buckley"){
        robinBuckley.classList.remove('hidden')
      }else if(author !== "Robin Buckley")
        robinBuckley.classList.add('hidden')
      
      if(author == "Steve Harrington"){
        steveHarrington.classList.remove('hidden')
      }else if(author !== "Steve Harrington")
        steveHarrington.classList.add('hidden')
      
      if(author == "Joyce Byers"){
        joyceByers.classList.remove('hidden')
      }else if(author !== "Joyce Byers")
        joyceByers.classList.add('hidden')

      if(author == "Sam Owens"){
        samOwens.classList.remove('hidden')
      }else if(author !== "Sam Owens")
        samOwens.classList.add('hidden')
      
      if(author == "Will Byers"){
        willByers.classList.remove('hidden')
      }else if(author !== "Will Byers")
        willByers.classList.add('hidden')
      
      if(author == "Kali Prasad"){
        kaliPrasad.classList.remove('hidden')
      }else if(author !== "Kali Prasad")
        kaliPrasad.classList.add('hidden')

      if(author == "Murray Bauman"){
        murrayBauman.classList.remove('hidden')
      }else if(author !== "Murray Bauman")
        murrayBauman.classList.add('hidden')
      
      if(author == "Billy Hargrove"){
        billyHargrove.classList.remove('hidden')
      }else if(author !== "Billy Hargrove")
        billyHargrove.classList.add('hidden')
      
      if(author == "Florance"){
        florance.classList.remove('hidden')
      }else if(author !== "Florance")
        florance.classList.add('hidden')
      
      

    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });



  }  
    

  