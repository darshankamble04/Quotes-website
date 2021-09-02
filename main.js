 // SOME DECLERATIONS
 const quotesText = document.getElementsByClassName("quotesText")[0]
 const quotesAuthor = document.getElementsByClassName("quotesAuthor")[0]
 const newOne = document.getElementById("newOne")
     // API
 const api = "https://type.fit/api/quotes"
 quotesText.innerText = `Wait ...`;

 // MAIN FUNC
 const getNewQuotes = async() => {
     try {
         const random = parseInt((1640) * Math.random())
         const data = await fetch(api)
         const jsonData = await data.json()
         const author = jsonData[random]["author"]
         quotesText.innerText = ` " ${jsonData[random]["text"]} "`
         if (author == null) {
             quotesAuthor.innerText = `- Me`
         } else {
             quotesAuthor.innerText = `- ${author}`
         }
     } catch (error) {
         quotesText.innerText = `You're offline. 
         Check your connection!`;
     }
 }
 newOne.addEventListener("click", () => {
     quotesText.innerText = `Wait ...`;
     quotesAuthor.innerText = "";
     getNewQuotes()
 })
 getNewQuotes()