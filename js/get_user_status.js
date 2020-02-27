
const get_status_path = 'user_status/'

const actualStatus = document.querySelector('#actual_status');


const getActualStatus = (id) => {
  const endpoint = url + get_status_path + id;

  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let r = xhr.response
    document.getElementById("actual_status").textContent=r["status"]
       }

     }

   xhr.open('GET', endpoint)
   xhr.send()

   }

getActualStatus(1);





