import { Games } from "./ui.module.js";
import { GameDetails } from "./gameDetails.module.js";

async function app() {
  const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", async function () {
        //   console.log(navLink.textContent);
          navLinks.forEach(item => {
            item.classList.remove("active")
          });
          navLink.classList.add("active")
          category = navLink.textContent;
          let game = new Games(category);
          const data = await game.getData();
          console.log(data);
          var temp = "";
          for (var i = 0; i < data.length; i++) {
            temp += `<div id="${
              data[i].id
            }" class="card col-lg-3 col-md-6 col-sm-12 text-center d-flex justify-content-center align-items-center">
                  <img class="w-100 h-100 py-2 " src="${data[i].thumbnail}" alt="">
                  <div class="d-flex justify-content-between w-100">
                      <h6>${data[i].title}</h6>
                      <p>Free</p>
                  </div>
                  <p class="w-100">${data[i].short_description.split(" ", 5)}</p>
              </div>`;
          }

          document.getElementById("showData").innerHTML = temp;

          document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", function () {
              var clicked_id = this.id;
              // console.log(clicked_id);
              async function app2() {
                let game = new GameDetails(clicked_id);
                const data = await game.getData();
                // console.log(data);
                document.querySelectorAll(".card").forEach((card) => {
                  card.addEventListener("click", function () {
                    document.querySelector(".display").classList.add("d-none");
                    document.querySelector(".gameDetails").classList.remove("d-none");
                  });
                });
                var temp = "";
                temp = `
                <div class="col-lg-5 col-md-12">
                
                                  <img class="w-100" src="${data.thumbnail}" alt="">
                                </div>
                                <div class="col-lg-7 col-md-12">
                                  <ul class="w-100 list-unstyled">
                                      <li class="p-1"><span class="fw-bolder">Title:</span> ${data.title}</li>
                                      <li class="p-1"><span class="fw-bolder">Category:</span> ${data.genre}</li>
                                      <li class="p-1"><span class="fw-bolder">Platform:</span> ${data.platform}</li>
                                      <li class="p-1"><span class="fw-bolder">Status:</span> ${data.status}</li>
                                      <li class="p-1">${data.description}</li>
                                  </ul>
                                  <a href="${data.game_url}"><button class="btn btn-outline-warning">Show Game</button></a>
                                </div>`;
        
                document.getElementById("showGameDetails").innerHTML = temp;
              }
        
              document.getElementById("de").addEventListener("click", de);
        
              function de() {
                document.querySelector(".display").classList.remove("d-none");
                document.querySelector(".gameDetails").classList.add("d-none");
              }
        
              app2();
            });
          });

        });
      });

      var category = "mmorpg";
      let game = new Games(category);

  async function displayUi(){
  const data = await game.getData();
  console.log(data);
  var temp = "";
  for (var i = 0; i < data.length; i++) {
    temp += `<div id="${
      data[i].id
    }" class="card col-lg-3 col-md-6 col-sm-12 text-center d-flex justify-content-center align-items-center">
          <img class="w-100 h-100 py-2 " src="${data[i].thumbnail}" alt="">
          <div class="d-flex justify-content-between w-100">
              <h6>${data[i].title}</h6>
              <p>Free</p>
          </div>
          <p class="w-100">${data[i].short_description.split(" ", 5)}</p>
      </div>`;
  }

  document.getElementById("showData").innerHTML = temp;
  }

  displayUi()

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      var clicked_id = this.id;
      async function app2() {
        let game = new GameDetails(clicked_id);
        const data = await game.getData();
        // console.log(data);
        document.querySelectorAll(".card").forEach((card) => {
          card.addEventListener("click", function () {
            document.querySelector(".display").classList.add("d-none");
            document.querySelector(".gameDetails").classList.remove("d-none");
          });
        });
        var temp = "";
        temp = `
        <div class="col-lg-5 col-md-12">
        
                          <img class="w-100" src="${data.thumbnail}" alt="">
                        </div>
                        <div class="col-lg-7 col-md-12">
                          <ul class="w-100 list-unstyled">
                              <li class="p-1"><span class="fw-bolder">Title:</span> ${data.title}</li>
                              <li class="p-1"><span class="fw-bolder">Category:</span> ${data.genre}</li>
                              <li class="p-1"><span class="fw-bolder">Platform:</span> ${data.platform}</li>
                              <li class="p-1"><span class="fw-bolder">Status:</span> ${data.status}</li>
                              <li class="p-1">${data.description}</li>
                          </ul>
                          <a href="${data.game_url}"><button class="btn btn-outline-warning">Show Game</button></a>
                        </div>`;

        document.getElementById("showGameDetails").innerHTML = temp;
      }

      document.getElementById("de").addEventListener("click", de);

      function de() {
        document.querySelector(".display").classList.remove("d-none");
        document.querySelector(".gameDetails").classList.add("d-none");
      }

      app2();
    });
  });
}
app();