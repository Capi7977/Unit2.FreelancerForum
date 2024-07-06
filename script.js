const priceSpan = document.querySelector("#avg-price")
const freeLancerlist = document.querySelector("#freelancers")

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const names = ["Isaias", "Pedro", "Jesus"];
const occupation = ["Investor", "Chef", "Mechanic"]
const Pricestart = [700, 400, 500]

const addFreeLancerIntervalId = setInterval(addFreelancer, 3000);
render()
  function render() {
    const listings = freelancers.map((person) => {
      const newListing = document.createElement("li");
      newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;
      return newListing;
    });
    console.log(...listings);
    freeLancerlist.replaceChildren(...listings);
  }


  function addFreelancer() {
    const newFreelancer = {
      name: names[Math.floor(Math.random() * names.length)],
      occupation: occupation[Math.floor(Math.random() * occupation.length)],
      price: Pricestart[Math.floor(Math.random() * Pricestart.length)],
    };
    freelancers.push(newFreelancer);
    console.log(freelancers);
    const averageRate =
      freelancers.reduce(
        (total, currentItem) => (total += currentItem.price),
        0
      ) / freelancers.length;
    priceSpan.innerText = averageRate.toFixed(2);
    render();
  }