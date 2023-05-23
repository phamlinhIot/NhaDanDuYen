
let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));
// menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active')
    main.classList.toggle('active')

}
// firebase
// mode
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})
// firebase toggle
// Initialize Firebase
// var firebaseConfig = {

//     apiKey: "AIzaSyBV4K5yn5rVfvef4ZSrp6J7RMZr_rtWUiw",
//     authDomain: "dht11-9cfc9.firebaseapp.com",
//     databaseURL: "https://dht11-9cfc9-default-rtdb.firebaseio.com",
//     projectId: "dht11-9cfc9",
//     storageBucket: "dht11-9cfc9.appspot.com",
//     messagingSenderId: "840592959904",
//     appId: "1:840592959904:web:4e3e8670ec1f6db5669cc5",
//     measurementId: "G-2D916HNF5N"
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
// $(document).ready(function () {

//     database.ref().on("value", function (snap) {
//         Humidity = snap.child("nha_yen_01/sensor/dht_11").val().humidity;
//         Temperature = snap.child("nha_yen_01/sensor/dht_11").val().temperature;
//         Light = snap.child("nha_yen_01/sensor/dht_11").val().light;

//         // đọc thông tin on off đèn cú
//         Music = snap.child("nha_yen_01/device").val().den_chong_cu;
//         // đọc thông tin on off đèn sưởi ấm
//         den_suoi_am = snap.child("nha_yen_01/device").val().den_suoi_am;
//         // đọc thông tin on off quạt
//         loa = snap.child("nha_yen_01/device").val().loa;
//         // đọc thông tin on off phun sương
//         phun_suong = snap.child("nha_yen_01/device").val().phun_suong_trong;
//         // đọc thông tin on off quạt
//         quat = snap.child("nha_yen_01/device").val().quat;
//         //auto
//         // đọc thông tin on off đèn cú
//         auto = snap.child("/").val().Auto;


//         $("#Temperature").html(Temperature)
//         $("#Humidity").html(Humidity)
//         $("#Light").html(Light)
//         //set trạng thái on off các nút bấm
//         if (Music) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact").style.display = "none";
//             document.getElementById("act").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact").style.display = "block";
//             document.getElementById("act").style.display = "none";
//         }
//         // 
//         if (den_suoi_am) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact1").style.display = "none";
//             document.getElementById("act1").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact1").style.display = "block";
//             document.getElementById("act1").style.display = "none";
//         }
//          // 
//          if (phun_suong) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact2").style.display = "none";
//             document.getElementById("act2").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact2").style.display = "block";
//             document.getElementById("act2").style.display = "none";
//         }
//          // 
//          if (quat) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact3").style.display = "none";
//             document.getElementById("act3").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact3").style.display = "block";
//             document.getElementById("act3").style.display = "none";
//         }
//          // 
//          if (loa) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact4").style.display = "none";
//             document.getElementById("act4").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact4").style.display = "block";
//             document.getElementById("act4").style.display = "none";
//         }
//         if (auto) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact5").style.display = "none";
//             document.getElementById("act5").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact5").style.display = "block";
//             document.getElementById("act5").style.display = "none";
//         }

//     });
//     //nút bấm đèn chống cú
//     $(".toggle-btn").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/den_chong_cu");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (Music) {    // post to firebase
//             console.log(Music)
//             data = {
//                 name: "Đèn chống cú",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             Music = false;
//         } else {
//             console.log(Music)
//             data2 = {
//                 name: "Đèn chống cú",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             Music = true;
//         }
//     })


//     //nút đèn sưởi ấm
//     $(".toggle-btn1").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/den_suoi_am");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (den_suoi_am) {    // post to firebase
//             console.log(den_suoi_am)
//             data = {
//                 name: "Đèn sưởi ấm",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             den_suoi_am = false;
//         } else {
//             console.log(den_suoi_am)
//             data2 = {
//                 name: "Đèn sưởi ấm",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             den_suoi_am = true;
//         }
//     })
//     //nút phun sương
//     $(".toggle-btn2").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/phun_suong_trong");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (phun_suong) {    // post to firebase
//             console.log(phun_suong)
//             data = {
//                 name: "Phun sương",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             phun_suong = false;
//         } else {
//             console.log(phun_suong)
//             data2 = {
//                 name: "Phun sương",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             phun_suong = true;
//         }
//     })
   
//     //nút quạt
//     $(".toggle-btn3").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/quat");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (quat) {    // post to firebase
//             console.log(quat)
//             data = {
//                 name: "Quạt",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             quat = false;
//         } else {
//             console.log(quat)
//             data2 = {
//                 name: "Quạt",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             quat = true;
//         }
//     })
   
//     //nút loa

//     $(".toggle-btn4").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/loa");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (loa) {    // post to firebase
//             console.log(loa)
//             data = {
//                 name: "Loa",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             loa = false;
//         } else {
//             console.log(quat)
//             data2 = {
//                 name: "Loa",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             loa = true;
//         }
//     })
   
//     //nút auto
//     $(".toggle-btn5").click(function () {
//         var firebaseRef = firebase.database().ref().child("Auto");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (auto) {    // post to firebase
//             console.log(auto)
//             data = {
//                 name: "Chế độ auto",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             auto = false;
//         } else {
//             console.log(auto)
//             data2 = {
//                 name: "Chế độ auto",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             auto= true;
//         }
//     })
   
    
// });
// var database = firebase.database();

// Get a reference
//  to the "users" node in your database
// var usersRef = database.ref('nha_yen_01/history_data');

// // Listen for changes in the data and update the HTML table
// usersRef.on('value', function (snapshot) {
//     var tableBody = document.getElementById('tbody');
//     tableBody.innerHTML = '';

//     snapshot.forEach(function (childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         if (childData.temperature < 32 && childData.temperature > 22) {
//             var canhbao = "Good"
//             var newRow = document.createElement('tr');
//             newRow.innerHTML = '<td>' + childData.time + '</td><td>' + childData.temperature + '</td>' + '<td>' + childData.humidity + '</td>' + '<td>' + childData.light + '</td>' + '<td><span class="status delivered">' + canhbao + '</span></td>';
//             tableBody.prepend(newRow);
//         }
//         if (childData.temperature > 32 ) {
//             var canhbao = "Warning"
//             var newRow = document.createElement('tr');
//             newRow.innerHTML = '<td>' + childData.time + '</td><td>' + childData.temperature + '</td>' + '<td>' + childData.humidity + '</td>' + '<td>' + childData.light + '</td>' + '<td><span class="status delivered">' + canhbao + '</span></td>';
//             tableBody.prepend(newRow);
//         }
//         if (childData.temperature < 22 ) {
//             var newRow = document.createElement('tr');
//             newRow.innerHTML = '<td>' + childData.DateTime + '</td><td>' + childData.Device + '</td>' + '<td>' + childData.Waring + '</td>' + '<td><span class="status warning">' + childData.status + '</span></td>';
//             tableBody.prepend(newRow);
//         }
//         // Add a new row to the HTML table with the data from the database

//     });
// });
var currentPage = 1;
var perPage = 5;
var totalPages = 1;

var employeeRef = database.ref('nha_yen_01/history_data');
employeeRef.on('value', function (snapshot) {
    var employees = snapshot.val();

    // Tính toán số trang dựa trên số lượng nhân viên
    totalPages = Math.ceil(Object.keys(employees).length / perPage);
    var keys = Object.keys(employees).reverse()
    // Tính toán vị trí bắt đầu và kết thúc của danh sách nhân viên hiển thị trên trang hiện tại
    var startIndex = (currentPage - 1) * perPage;
    var endIndex = startIndex + perPage;

    // Hiển thị danh sách nhân viên
    var tableRows = '';
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (startIndex <= 0) {
            // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
            if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                tableRows += '<tr>' +
                    '<td>' + employees[key].time + '</td>' +
                    '<td>' + employees[key].temperature + '</td>' +
                    '<td>' + employees[key].humidity + '</td>' +
                    '<td>' + employees[key].light + '</td>' +
                    '<td><span class="status off">' + "Warning" + '</span></td>'
                '</tr>';
            } else {
                tableRows += '<tr>' +
                    '<td>' + employees[key].time + '</td>' +
                    '<td>' + employees[key].temperature + '</td>' +
                    '<td>' + employees[key].humidity + '</td>' +
                    '<td>' + employees[key].light + '</td>' +
                    '<td><span class="status delivered">' + "good" + '</span></td>'
                '</tr>';
            }

        }
        startIndex--;

        if (endIndex <= 0) {
            // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
            break;
        }
        endIndex--;
    }
    document.getElementById('employee-list').innerHTML = tableRows;
});

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderEmployees();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderEmployees();
    }
}

function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderEmployees();
    }
}
function renderEmployees() {
    employeeRef.once('value', function (snapshot) {
        var employees = snapshot.val();
        // Tính toán số trang dựa trên số lượng nhân viên
        totalPages = Math.ceil(Object.keys(employees).length / perPage);
        var keys = Object.keys(employees).reverse()
        // Tính toán vị trí bắt đầu và kết thúc của danh sách nhân viên hiển thị trên trang hiện tại
        var startIndex = (currentPage - 1) * perPage;
        var endIndex = startIndex + perPage;
        var tableRows = '';
        // Hiển thị danh sách nhân viên

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            function a() {
                var departmentSelect = document.querySelector('#department');
                departmentSelect.addEventListener('change', function () {
                    var department = departmentSelect.value;
                    console.log(department)
                    return departmentSelect.value;

                });
            }
            var department = a();
            if (department = "Time") {
                if (employees[key].time.toLowerCase().indexOf(document.getElementById('search-input').value.toLowerCase()) != -1) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }
            if (department = "temperature") {
                if (employees[key].temperature == document.getElementById('search-input').value) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }
            if (department = "humiidy") {
                if (employees[key].humidity == document.getElementById('search-input').value) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }

            if (department = "light") {
                if (employees[key].light == document.getElementById('search-input').value) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }

        }

        document.getElementById('employee-list').innerHTML = tableRows;
    });
}

document.getElementById('search-input').addEventListener('input', function () {
    currentPage = 1;

    renderEmployees();
});

