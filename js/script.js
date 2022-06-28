console.log("Warsztat – Walidacja formularza zapisu do Newsletter'a'");

let form1 = document.getElementById('my-form');
let allAgreementChbx = document.getElementById('allAgreement');
const validate = (event) => {
    event.preventDefault();
    let name = document.querySelector('[name="name"]');
    let email = document.querySelector('[name="email"]');
    let agree1 = document.querySelector('[name="agreement1"]');
    let errors = document.querySelector('ul');
    console.log(agree1);

    errors.innerHTML = '';

    if (name.value.trim() === "") {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko';
        errors.appendChild(liError);

    }

    if (email.value.trim() === "") {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail';
        errors.appendChild(liError);
    }

    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz @';
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Zaznacz pierwszą zgodę';
        errors.appendChild(liError);
    }

    console.log(errors.children.length);

    if (errors.children.length > 0) {

    }
    // else console.log("Wartości wpisana");
    // if (email.value === false) alert("Lista z błędami do poprawy")
    // else console.log("Adres e-mail zawiera znak @");
    // console.log(errors);



}

const allAgreement = (event) => {
    let agree1 = document.getElementById('firstAgreement');
    let agree2 = document.getElementById('secondAgreement');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    // console.log(event.target.checked);
}

form1.addEventListener('submit', validate);
allAgreementChbx.addEventListener('change', allAgreement);
// console.log(form1, allAgreement);

// console.log(`Imię: ${fname.value}  Nazwisko: ${lname.value} E-mail: ${email.value}`);
// if (fname.value, lname.value, email.value !== "") console.log("Wartości wpisana")
// else alert("Lista z błędami do poprawy");