
//const get_status_path = 'user_status/'

//const actualStatus = document.querySelector('#actual_status');


const refreshActualStatus = () => {
  const endpoint = url + get_status_path + 1;

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



const refresh_btn = document.getElementById('refresh_btn');

refresh_btn.addEventListener('click', refreshActualStatus);



