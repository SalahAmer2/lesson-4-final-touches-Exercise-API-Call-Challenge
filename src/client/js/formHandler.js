function handleSubmit(event) {
  event.preventDefault()
  let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
  let apiKey = "49be82b027adf26dca23a428a21e0f92";
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)

   console.log("::: Form Submitted :::")
  // fetch('http://localhost:8080/test')
  // .then(res => res.json())
  // .then(function(data) {
  //     document.getElementById('results').innerHTML = data.message
  // })

  //This below works and displays temperature number
  fetch(baseURL + "24701" + ",us&appid=" + apiKey)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.main.temp
    })
}
//This doesn't work here
// const getFunc = async ()=>{
//   const res = await fetch(baseURL+24701+",us&appid="+apiKey);
//   try {
//     const data = await res.json();
//     console.log(data);
//     apiTemp = data.main.temp;
//     document.getElementById('results').innerHTML= apiTemp//LOOK HERE
//   } catch(error) {
//     console.log("error", error);
//     //appropriately handle the error
//   }
// };
// getFunc()

export {
  handleSubmit
}
