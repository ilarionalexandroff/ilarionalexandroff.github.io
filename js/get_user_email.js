
get_user_path = 'user/'

const userEmail = document.querySelector('#user_email');

const getEmail = (id) => {
  const endpoint = url + get_user_path + id;

  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let r = xhr.response
    document.getElementById("user_email").textContent=r["email"]
       }

     }

   xhr.open('GET', endpoint)
   xhr.send()

   }

getEmail(1);
