


const userInfoBtn = document.getElementById('user_info_btn');
const space_for_user_info = document.getElementById('space_for_user_info');


const getUserDescription = () => {
  const endpoint = url + get_user_path + 1;

  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let r = xhr.response
    space_for_user_info.textContent=r["description"]



       }

     }

   xhr.open('GET', endpoint)
   xhr.send()

   }


userInfoBtn.addEventListener('click', getUserDescription);

