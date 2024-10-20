const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generate = document.getElementById('gen');
const download = document.getElementById('down');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generate.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
});

download.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgAttr = img.getAttribute('src');
        download.setAttribute("href", imgAttr);
    }
    else{
        download.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRcode();
    }
    else{
        alert("Enter Text or URL");
    }
}


function generateQRcode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
        text : qrText.value,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}