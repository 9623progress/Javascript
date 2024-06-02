let insert = document.querySelector(".insert");

window.addEventListener("keypress", (e) => {
  insert.innerHTML = `
    <table>
  <tr>
    <th>key name</th>
    <th>key code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key == " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    `;
});
