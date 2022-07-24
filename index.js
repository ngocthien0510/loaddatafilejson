
$(function () {
  
  // FETCHING DATA FROM JSON FILE
  $.getJSON("./log.json", 
    function (data) {
      var log = '';
      // ITERATING THROUGH OBJECTS
      $.each(data, function (key, value) {
        var row=`
        <tr>
          <td> 
            ${value.userSn}
          </td>
          <td>
            ${value.deviceUserId }
          </td>
          <td>
            ${value.recordTime }
          </td>
        </tr>`

          log+=row
      });
        
      //INSERTING ROWS INTO TABLE 
      $('#timekeeper').append(log);
  });
});