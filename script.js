document.getElementById("calculate-bmi").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("berat-badan").value);
    const heightCm = parseFloat(document.getElementById("tinggi-badan").value);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Harap masukkan nilai berat badan dan tinggi badan yang valid.");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category = "";
    let advice = "";

    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
        advice = "Anda perlu meningkatkan asupan nutrisi.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat badan normal";
        advice = "Pertahankan pola makan sehat dan olahraga teratur.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
        advice = "Cobalah menyesuaikan pola makan dan aktivitas fisik.";
    } else {
        category = "Obesitas";
        advice = "Disarankan untuk berkonsultasi dengan dokter atau ahli gizi.";
    }

    document.getElementById("bmi-value").textContent = bmi;
    document.getElementById("bmi-category").textContent = category;
    document.getElementById("bmi-advice").textContent = advice;

    document.getElementById("result-section").style.display = "block";
    document.getElementById("download-result").style.display = "block";
});
