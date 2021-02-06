let previousDisplaycard = document.getElementById('displaycountry').innerHTML;
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => DisplayData(data));

function DisplayData(data) {
    for (let i = 0; i < data.length; i++) {
        const HtmlTemplete = `
            <div class="card text-center col-lg-3 col-md-4 col-sm-12 mt-3 cards" style="width: 18rem; border:none">
                    <div class='body'>
                        <img src="${data[i].flag}" class="card-img-top" alt="...">
                        <div class="card-body" style="padding-left: 0px;">
                            <h3 class="card-title " id="Cname">${data[i].name}</h3>
                            <p class="card-text" id="cityname">${data[i].capital}</p>
                        </div>
                        <div class="footer">
                            <a onclick="information('${data[i].name}')"class="text-center btn btn-primary">Details</a>
                        </div>
                    </div>
            </div>`;
        previousDisplaycard = previousDisplaycard + HtmlTemplete;
    }
    document.getElementById('displaycountry').innerHTML = previousDisplaycard;
}

function information(name) {
    document.getElementById('Data').style.display = 'block';
    document.getElementById('topsection').style.display = 'none';

    (function CountryData() {
        fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
        .then(res => res.json())
        .then(data => ShowData(data))
        .catch()
    })();
    function ShowData(data) {
        const parentNode = document.getElementById('Data');
        const HtmlTemplete = `<h1>${data[0].name} Information</h1>
            <table id="informationtable">
                <tr>
                    <img src="${data[0].flag}" class="dataimg" alt="...">
                    <td><h5>Name: </h5></td>
                    <td><h5>${data[0].name}<h5></td>
                </tr>
                <tr>
                    <td><h5>Region: </h5></td>
                    <td><h5>${data[0].region}<h5></td>
                </tr>
                <tr>
                    <td><h5>Sub Region: </h5></td>
                    <td><h5>${data[0].subregion}<h5></td>
                </tr>
                <tr>
                    <td><h5>Population: </h5></td>
                    <td><h5>${data[0].population}<h5></td>
                </tr>
                <tr>
                    <td><h5>Area: </h5></td>
                    <td><h5>${data[0].area}<h5></td>
                </tr>
                <tr>
                    <td><h5>Languages: </h5></td>
                    <td><h5>${data[0].languages[0].name}<h5></td>
                </tr>
            </table>`
        parentNode.innerHTML = HtmlTemplete;
    }
}