async function subPlaneInput() {
    const container = document.getElementById("subPlaneContainer");
    const input = document.getElementById("subPlane").value;

    container.innerHTML = "";
    container.style.border = "2px solid black";
    for (let i = 0; i < input; i++) {
        container.innerHTML += '<label for="subPlane' + i.toString() + '">ขนาดแปลงย่อยที่ ' + (i + 1).toString() + ' ( ไร่)</label><input style="direction: ltr; text-align: right; margin-right: 10px" type="number" id="subPlane' + i.toString() + '" name="subPlane' + i.toString() + '">'
    }
    container.innerHTML += '<br><button style="width: 80px; height: 35px; font-size: 16px;" onclick="redirectPage()">Submit</button'
}

async function redirectPage() {

}