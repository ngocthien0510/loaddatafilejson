
// $(function () {
//   $.getJSON("./log.json", 
//     function (data) {
//       var log = '';
//       $.each(data, function (key, value) {
//         var row=`
//         <tr>
//           <td> 
//             ${value.userSn}
//           </td>
//           <td>
//             ${value.deviceUserId }
//           </td>
//           <td>
//             ${value.recordTime }
//           </td>
//         </tr>`

//           log+=row
//       });
        
//       //INSERTING ROWS INTO TABLE 
//       $('#timekeeper').append(log);
//   });
// });

fetch("./log.json")
  .then(response => response.json())
  .then(data =>{
    const log= document.querySelector('#timekeeper')
    data.forEach(item => {
      console.log(item);
      log.innerHTML +=`<tr>
                        <td> 
                          ${item.userSn}
                        </td>
                        <td>
                          ${item.deviceUserId }
                        </td>
                        <td>
                          ${item.recordTime }
                        </td>
                      </tr>`
      
    });
  })