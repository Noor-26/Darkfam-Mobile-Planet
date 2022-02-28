const getPhoneName = () => {
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value;
    console.log(searchValue);

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
};



