let container = document.getElementsByClassName('customerprofiles');


console.log(customers)
const customer = customers
console.log(customer)


for (let customer of customers){

//individual customer profiles

    let name = customer.name.first + customer.name.last
    console.log(name);

    let email = customer.email;
    console.log(email)

    let stateName = customer.location.state;
    nameToAbbr(stateName);
    console.log(nameToAbbr(stateName));

    let address = customer.location.street.number + " " + customer.location.street.name + " " + customer.location.city + ", " + nameToAbbr(stateName) + " " + customer.location.postcode;
    console.log(address);

    let birthday = moment(customer.dob.date).format("MMM DD, YYYY")
    let dob = "DOB: " + birthday;
    console.log(dob)

    let date = moment(customer.registered.date).format("MMM DD, YYYY");
    let register = "Customer since: " + date;
    console.log(register);

    let phone = customer.phone;
    console.log(phone);

    let picture = customer.picture.medium;
    console.log(picture);


    container.innerHTML += `<img class="picture" src=${customer.picture.medium} />`


const h2El = document.createElement('h2')
const h2Text = document.createTextNode(name)
h2El.appendChild(h2Text)

console.log(h2El)


const h3El = document.createElement('span')
const h3Text = document.createTextNode(email)
h3El.appendChild(h3Text)

console.log(h3El)


const h4El = document.createElement('span')
const h4Text = document.createTextNode(address)
h4El.appendChild(h4Text)

console.log(h4El)


const h5El = document.createElement('span')
const h5Text = document.createTextNode(dob)
h5El.appendChild(h5Text)

console.log(h5El)


const h6El = document.createElement('span')
const h6Text = document.createTextNode(register)
h6El.appendChild(h2Text)

console.log(h6El)
}

