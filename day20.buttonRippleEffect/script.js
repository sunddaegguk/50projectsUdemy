const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [];

getData();
filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    try {
        const res = await fetch('https://randomuser.me/api?results=50');
        const { results } = await res.json();

        // Clear result
        result.innerHTML = '';

        results.forEach(user => {
            const li = document.createElement('li');

            listItems.push(user);

            li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="usr-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
            `;
            result.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function filterData(searchTerm) {
    listItems.forEach(user => {
        const li = result.querySelector(`[alt="${user.name.first}"]`);
        if (user.name.first.toLowerCase().includes(searchTerm.toLowerCase())) {
            li.classList.remove('hide');
        } else {
            li.classList.add('hide');
        }
    });
}
