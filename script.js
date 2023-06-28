let filterBlur = document.getElementById('blur');
let filterContrast = document.getElementById('contrast');
let filterHueRotate = document.getElementById('hue-rotate');
let filterSepia = document.getElementById('sepia');

let flipXBtn = document.getElementById('flip-x');
let flipYBtn = document.getElementById('flip-y');

let uploadButton = document.getElementById('upload-button');
let image = document.getElementById('chosen-image');

uploadButton.onchange = () => {
  document.querySelector('.image-container').style.display = 'block';
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    image.setAttribute('src', reader.result);
  };
};
