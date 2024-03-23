let table = document.getElementById("table").innerHTML;

let temp = `<br> <table
class="table table-bordered table-hover table-striped"
id="table" style="margin:10px"
>
<tr class="table-head">
<td>Sunday</td>
<td>Monday</td>
<td>Tuesday</td>
<td>Wednesday</td>
<td>Thursday</td>
<td>Friday</td>
<td>Saturday</td>
</tr>`;
let month = parseInt(document.querySelector('#enterMonth').value);
let day = 1;

function getCalendar() {
    
    month = parseInt(document.querySelector('#enterMonth').value);

    for (let i = 1; i <= 5; i++) {

        temp += `<tr>`;
        for (let j = 1; j <= 7; j++) {
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 11 || month === 12) {
                if (day <= 31) {
                    temp += `<td> ${day} </td>`;
                } else {
                    temp += `<td> </td>`;
                }
            } else if (month === 2) {
                if (day <= 28) {
                    temp += `<td> ${day} </td>`;
                } else {
                    temp += `<td> </td>`;
                }
            } else if (month === 4 || month === 6 || month === 9 || month === 11) {
                if (day <= 30) {
                    temp += `<td> ${day} </td>`;
                } else {
                    temp += `<td> </td>`;
                }
            }
            else {
                if (day <= 31) {
                    temp += `<td> -1 </td>`;
                } else {
                    temp += `<td> -1 </td>`;
                }

            }
            day++;
        }
        temp += `</tr>`;   
    }
    temp += `</table> <br />`
    document.getElementById("table").innerHTML += temp;
    console.log(temp);
}
// month = 0;
let content = temp;
// temp =``;