var FullImgBox = document.getElementById("FullImgBox");
var FullImg = document.getElementById("FullImg");

function openFullImg(Pic) {
    //We did this so that the display: none; property applied to our full-img changes when this action occurs.
    FullImgBox.style.display = "flex";

    FullImg.src = Pic;
}

function closeFullImg() {
    FullImgBox.style.display = "none";

}