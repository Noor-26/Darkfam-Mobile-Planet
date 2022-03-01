const getPhoneName = () => {
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value;   

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
};

// function of displaying the phones

const displayPhone = phones => {
  const mainDiv = document.getElementById('display-phone')
    let i = 0
      phones.forEach(phone => {
        i++
        if (i <= 20) {
          const div = document.createElement('div')
          div.innerHTML = `
          <div class="col h-100">
          <div class="card h-100">
          <img src="${phone.image}" class="card-img-top p-5" alt="...">
          <div class="card-body text-center">
          <h5 class="card-title">Name : ${phone.phone_name}</h5>
                <h6>Brand : ${phone.brand}</h6>
                <button class="btn btn-success" onclick="loadOneItem('${phone.slug}')">Detail</button>
              </div>
            </div>
          </div>
          `
          mainDiv.appendChild(div)
        }
        });
        

}

// displaying selected item

const loadOneItem = id => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res => res.json())
    .then(data => displayOneItem(data.data))
}

const selectedDiv = document.getElementById('selected-item')
selectedDiv.style.display = 'none'

const displayOneItem = phoneId => {
  console.log(phoneId);
  selectedDiv.style.display = "grid"
  const div = document.createElement('div')
  div.innerHTML = `
  <div class="row g-0">
          <div class="col-md-4 text-center ">
            <img src="${phoneId.image}" class="img-fluid rounded-start p-4 " alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body ">
            
              <h5 class="card-title text-center">Name : ${phoneId.name}</h5>
              <p class="text-center">release date : ${phoneId.releaseDate}</p>

              <div >
              <h5>Main features</h5>
                <p>Memory : ${phoneId.mainFeatures.memory}</p>
                <p>Chipset : ${phoneId.mainFeatures.chipSet} </p>
                <p>Display size : ${phoneId.mainFeatures.displaySize} </p>
                <p>Storage : ${phoneId.storage}</p> 
              </div>
              <h5>Sensors</h5>
              <div id="sensors">
                  
              </div>
              
              <h5 class="mt-3">Other features</h5>
              <p>Bluetooth : ${phoneId.others.Bluetooth}</p>
              <p>GPS : ${phoneId.others.GPS}</p>
              <p>NFC : ${phoneId.others.NFC}</p>
              <p>Radio : ${phoneId.others.Radio}</p>
              <p>USB : ${phoneId.others.USB}</p>
              <p>WLAN : ${phoneId.others.WLAN}</p>

              
            </div>
          </div>
        </div>
  `
  selectedDiv.appendChild(div)
  showSensors(phoneId.mainFeatures.sensors)
}

const showSensors = sensors =>{
  const ul = document.createElement('ul')
  const sensorId = document.getElementById('sensors')
  sensors.forEach(sensor => {
    const li = document.createElement('li')
    li.innerHTML = sensor  
    ul.appendChild(li)
  });

  sensorId.innerHTML = ul.innerHTML
}


