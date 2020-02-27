const post_status_path = 'user_status/'
const selected_status = document.querySelector('#selected_status');


const postStatus = () => {
  const endpoint = url + post_status_path + 1;

  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json'
  const body = {"status": selected_status.value}

  xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let r = xhr.response
    document.getElementById("actual_status").textContent=r["status"]
       }

     }

   xhr.open('POST', endpoint)
   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   xhr.send(JSON.stringify(body))

   }



const save_btn = document.getElementById('save_btn');

save_btn.addEventListener('click', postStatus);
