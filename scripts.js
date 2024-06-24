const search = document.getElementById("search");
const resultContainer = document.getElementById("result");
const results = [];

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        createElements(data);
    } catch (error) {
        alert("Error fetching data");
    }
};

const createElements = (data) => {
    data.forEach((item) => {
        const el = document.createElement("li");
        el.classList.add("item");
        el.textContent = item.title;
        results.push(el);
        resultContainer.appendChild(el);
    });
};

const filterItems = (value) => {
    results.forEach((el) => {
        el.classList.toggle("active", el.textContent.toLowerCase().includes(value.trim().toLowerCase()));
    });
};

search.addEventListener("input", (e) => filterItems(e.target.value));

getData();
