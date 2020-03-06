function handleSubmit(event) {
  event.preventDefault()
  let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
  let apiKey = "49be82b027adf26dca23a428a21e0f92";
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)

   console.log("::: Form Submitted :::")
  fetch('http://localhost:8080/test')
  .then(res => res.json())
  .then(function(data) {
      document.getElementById('results').innerHTML = data.message
  })

  fetch(baseURL + "24701" + ",us&appid=" + apiKey)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.main.temp
    })
}

export {
  handleSubmit
}
