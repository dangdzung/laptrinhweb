// let x = prompt("Nhap ngau nhien 0 hoac 1:");
// while (true) {
//     if (a === parseInt(x)) {
//         alert("Ban da nhap dung");
//         break;
//     } else {
//         let a = Math.round(Math.random());
//         let x = prompt("Nhap ngau nhien 0 hoac 1:");
//     }
// }
function kt() {
    while (true) {
        var x = prompt("Nhap ngau nhien 0 hoac 1:");
        var a = Math.round(Math.random());
        if (parseInt(x) === a) {
            alert("Ban da doan dung");
            break;
        } else {
            alert("Ban chua doan dung hay thu lai");
        }
    }
}
kt();
