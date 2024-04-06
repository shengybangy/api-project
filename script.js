
fetch("https://randomuser.me/api/?results=5").then((response)=>{
   // console.log(response);
    return response.json();
}).then((data)=>{
    let tableData = "";
    data.results.map((user) => {
        tableData += `<tr>
        <td>${user.name.first}</td>
        <td>${user.location.city}</td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((error)=>{
    console.log(error);
})