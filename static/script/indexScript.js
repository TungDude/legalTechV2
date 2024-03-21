async function subPlaneInput() {
    const subPlaneContainer = document.getElementById("subPlaneContainer");
    const input = document.getElementById("subPlaneNo").value;

    subPlaneContainer.innerHTML = "";
    // container.style.border = "2px solid black";
    for (let i = 0; i < input; i++) {
        subPlaneContainer.innerHTML += '<label for="subPlane' + i.toString() + '">ขนาดแปลงย่อยที่ ' + (i + 1).toString() + ' ( ไร่)</label><input style="direction: ltr; text-align: right; margin-right: 10px" type="number" id="subPlane' + i.toString() + '" name="subPlane' + i.toString() + '">'
    }

    subPlaneContainer.innerHTML += '<br><input style="width: 80px; height: 35px; font-size: 16px;" class="calculateButton" type="submit" value="Submit">'
}

async function back() {
    event.preventDefault();
    window.location.href = "/home";
}