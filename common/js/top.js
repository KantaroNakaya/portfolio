// ポップアップ
function showPopup() {
    document.querySelector(".popup").style.display = "block";
}
function closeModal() {
    document.querySelector(".popup").style.display = "none";
}

window.onload = function() {
    setTimeout(showPopup, 1000);
};