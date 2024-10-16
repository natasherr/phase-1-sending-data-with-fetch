const inputData = {name :"Steve", email : "steve@steve.com"}

 const configObject = {
    method : "POST",
    headers : {"Content-Type":"application/json", "Accept":"application/json"},
    body : JSON.stringify(inputData),
    }
   

 function submitData(name, email){
 const fetchingPart = 
   fetch("http://localhost:3000/users" , configObject)
   .then((response) => {return response.json()})
   .then((object) => {document.body.innerHTML += object["id"]})
   .catch((error) => {document.body.innerHTML += error.message})
  
   return fetchingPart
}

