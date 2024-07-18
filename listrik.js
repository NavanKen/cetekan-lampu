function saklar(pencet, lampu) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (pencet == "on") {
        if (lampu == 1) {
            lampu1.src = "Gambar/on.png";
        }
        if (lampu == 2) {
            lampu2.src = "Gambar/on.png";
        }
        if (lampu == 3) {
            lampu3.src = "Gambar/on.png"
        }
    }
    if (pencet == "off") {
        if (lampu == 1) {
            lampu1.src = "Gambar/off.png";
        }
        if (lampu == 2) {
            lampu2.src = "Gambar/off.png";
        }
        if (lampu == 3) {
            lampu3.src = "Gambar/off.png"
        }
    }
}