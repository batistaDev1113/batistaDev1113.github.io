/*let myArray = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];



  function getMonthName(num){
      var month = myArray[num - 1];
      return console.log(month);
  }

*/

/*let user = {
  fName: "Yunior",
  lName: "Batista",
  email: "ybat2018@gmail.com",
  phone: 4077855587,
  }



 function logInfoUser(info){
  let data = "";
  for(let i in info){
    data += " " +user[i];
  }
  return console.log(data);
}


logInfoUser(user);
*/

document.addEventListener("keydown", function (event) {
  for (let i in event) {
    let display = document.getElementById('keyDisplay').innerHTML = "You pressed key:  " + event.key + " with keycode " + event.which;

  }


});