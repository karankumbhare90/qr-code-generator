const wrapper = document.querySelector('.wrapper');
const qrInput = document.querySelector('.form input');
const generateBtn = document.querySelector('.form button');
const qrIMg = document.querySelector('.qr-code img');
let preValue;

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value.trim();

    if(!qrValue || preValue == qrValue) {
        alert('Please insert something...');
        return 
    };

    preValue = qrValue;

    generateBtn.innerText = 'Generating QR Code...'

    // qrIMg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrIMg.src = `http://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&amp;size=150x150`;
    console.log(qrIMg.src);

    qrIMg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = "Generate QR Code.";
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value.trim()){
        wrapper.classList.remove('active');
        preValue = "";
    }
})