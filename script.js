const table = document.querySelector(".body");
const page_number_container = document.querySelector(".pagenumber_container");
let users;
const ELEMENTS_PER_PAGE = 10;
async function getDetails() {
  const data = await fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );
  users = await data.json();
}

function display(current_page = 1) {
  const start_index = (current_page - 1) * 10;
  const end_index = current_page * 10;
  
  table.innerHTML = "";
  for (let i = start_index; i < end_index; i++) {
    table.innerHTML += `
         
         <tr>
         <td> <p class="details_values">${users[i].id}</p></td>
        <td> <p class="details_values">${users[i].name}</p></td>    
        <td>  <p class="details_values">${users[i].email}</p></td>
        </tr>
        
    `;
  }
}
async function generatePageNumber() {
  await getDetails();
  display();
  const no_of_pages = users.length / ELEMENTS_PER_PAGE;
  
  for (var i = 0; i < no_of_pages; i++) {
   
    page_number_container.innerHTML += `
  <div class="page_number" onclick="display(${i+1})">${i+1}</div>`;

  }
 
    page_number_container.innerHTML +=`
  <div class="page_number" onclick="display(1)">First</div>
  <div class="page_number" onclick="display(10)">Last</div>
  `;
  

}

generatePageNumber();
