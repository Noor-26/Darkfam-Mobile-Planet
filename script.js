const getPhoneName = () => {
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value;   // got input value

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
};

// function of displaying the phones

const displayPhone = phones => {
    console.log(phones);
    const mainDiv = document.getElementById('display-phone')
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col h-100">
          <div class="card h-100">
            <img src="${phone.image}" class="card-img-top p-5" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">Name : ${phone.phone_name}</h5>
              <h6>Brand : ${phone.brand}</h6>
              <button class="btn btn-success">Detail</button>
            </div>
          </div>
        </div>
        `
        mainDiv.appendChild(div)
    });
}


