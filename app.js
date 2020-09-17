const Name = "Ali";
const Age = "   30";
const LastName = "ABUHAMRA";

let html;
function hello() {
    return 'Hello'
}

html = `<ul>
   <li>Name : ${Name}</li>
   <li>${1 + 1}</li>
   <li>${hello()}</li>
       </ul>`;


document.body.innerHTML = html;
