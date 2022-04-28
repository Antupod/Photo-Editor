const img = document.getElementById('image');
const ranges = document.querySelectorAll('input[type="range"]');
const checkbox = document.querySelectorAll('input[type="checkbox"]');

ranges[0].addEventListener("input", function (element) {
    img.style.filter = `blur(${element.target.value / 10}px)`;
});

ranges[1].addEventListener("input", function (element) {
    img.style.filter = `brightness(${element.target.value}%)`;
});

ranges[2].addEventListener("input", function (element) {
    img.style.filter = `hue-rotate(${element.target.value}deg)`;
});

ranges[3].addEventListener("input", function (element) {
    img.style.filter = `saturate(${element.target.value}%)`;
});

ranges[4].addEventListener("input", function (element) {
    img.style.filter = `contrast(${element.target.value}%)`;
});

checkbox[0].addEventListener("input", function () {
    img.style.filter = checkbox[0].checked ? `invert(1)` : 'none';
});

checkbox[1].addEventListener("input", function () {
    img.style.filter = checkbox[1].checked ? `saturate(130%) contrast(60%)` : 'none';
});

checkbox[2].addEventListener("input", function () {
    img.style.filter = checkbox[2].checked ? `saturate(150%) contrast(150%)` : 'none';
});

function buttonClick() {
    img.style.filter = 'none';
    document.getElementById('form').reset();
}

document.querySelector('.reset').addEventListener("click", buttonClick);