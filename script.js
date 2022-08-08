// grab generate btn
const btn = document.getElementById("btn");

// grab advice text and id
const id = document.getElementById("id");
const advice = document.getElementById("advice");

// to store data
let data;

// loading dot
const loading = document.getElementsByClassName("col-3")[0];

/////////////////////////////////////////////////////////////

//  generate btn eventlistener

btn.addEventListener("click", function () {
  // adding loadting till the fetch data show up
  loading.style.display = "block";

  // fetch random advice API
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((adv) => {
      data = adv.slip;

      // display advice and id
      advice.textContent = `"${data.advice}"`;
      id.textContent = "ADVICE # " + data.id;

      // remove loading cause data showed up
      loading.style.display = "none";
    })

    // incase there's an error
    .catch((err) => {
      advice.textContent = err;
      id.textContent = "##ERROR";

      // remove loading, there's an error
      loading.style.display = "none";
    });
});
