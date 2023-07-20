
// data
function calculatebmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
// perhitungan
    let bmi = (weight / (height * height) * 10000)
// hasil
    document.getElementById('heading').innerHTML = 'Your BMI is'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)
// result
    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = 'Kekurangan Berat Badan'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'Normal (Ideal)'
    } else if (bmi >= 25 && bmi <=29.9) { 
        document.getElementById('message').innerHTML = 'Kelebihan Berat Badan'
    } else {
        document.getElementById('message').innerHTML = 'Kegemukan (Obesitas)'
    }
}
// restart
function reload() {
    window.location.reload()
}

// disable and enable button
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const submit = document.getElementById('submit');

function checkInputs() {
  const value1 = weight.value;
  const value2 = height.value;

  if (value1 !== '' && value2 !== '' && !isNaN(value1) && !isNaN(value2)) {
    submit.disabled = false;
    submit.classList.add('button-enable')
  } else {
    submit.disabled = true;
    submit.classList.remove('button-enable')
  }
}

weight.addEventListener('input', checkInputs);
height.addEventListener('input', checkInputs);




  
