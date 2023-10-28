const dailyBtn = document.getElementById("first-btn");
const weeklyBtn = document.getElementById("second-btn");
const monthlyBtn = document.getElementById("third-btn");

dailyBtn.addEventListener("click", () => {
  // Active Link
  dailyBtn.classList.add("active-link");
  monthlyBtn.classList.remove("active-link");
  weeklyBtn.classList.remove("active-link");

  //   Text Content
  document.querySelector("#work-hours").textContent = "5hrs";
  document.querySelector("#work-last").textContent = "Yesterday - 7hrs";

  document.querySelector("#play-hours").textContent = "1hr";
  document.querySelector("#play-last").textContent = "Yesterday - 2hrs";

  document.querySelector("#study-hours").textContent = "0hrs";
  document.querySelector("#study-last").textContent = "Yesterday - 4hrs";

  document.querySelector("#exercise-hours").textContent = "1hr";
  document.querySelector("#exercise-last").textContent = "Yesterday - 1hr";

  document.querySelector("#social-hours").textContent = "1hr";
  document.querySelector("#social-last").textContent = "Yesterday - 3hrs";

  document.querySelector("#self-hours").textContent = "0hrs";
  document.querySelector("#self-last").textContent = "Yesterday - 1hr   ";
});

weeklyBtn.addEventListener("click", () => {
  // Active Link
  weeklyBtn.classList.add("active-link");
  monthlyBtn.classList.remove("active-link");
  dailyBtn.classList.remove("active-link");

  //   Text Content
  document.querySelector("#work-hours").textContent = "32hrs";
  document.querySelector("#work-last").textContent = "Last-Week - 32hrs";

  document.querySelector("#play-hours").textContent = "10hrs";
  document.querySelector("#play-last").textContent = "Last-Week - 8hrs";

  document.querySelector("#study-hours").textContent = "4hrs";
  document.querySelector("#study-last").textContent = "Last-Week - 7hrs";

  document.querySelector("#exercise-hours").textContent = "4hrs";
  document.querySelector("#exercise-last").textContent = "Last-Week - 5hrs";

  document.querySelector("#social-hours").textContent = "5hrs";
  document.querySelector("#social-last").textContent = "Last-Week - 10hrs";

  document.querySelector("#self-hours").textContent = "2hrs";
  document.querySelector("#self-last").textContent = "Last-Week - 2hrs   ";
});

monthlyBtn.addEventListener("click", () => {
  // Active Link
  monthlyBtn.classList.add("active-link");
  dailyBtn.classList.remove("active-link");
  weeklyBtn.classList.remove("active-link");

  //   Text Content
  document.querySelector("#work-hours").textContent = "103hrs";
  document.querySelector("#work-last").textContent = "Last-Month - 128hrs";

  document.querySelector("#play-hours").textContent = "23hrs";
  document.querySelector("#play-last").textContent = "Last-Month - 29hrs";

  document.querySelector("#study-hours").textContent = "13hrs";
  document.querySelector("#study-last").textContent = "Last-Month - 19hrs";

  document.querySelector("#exercise-hours").textContent = "11hrs";
  document.querySelector("#exercise-last").textContent = "Last-Month - 18hrs";

  document.querySelector("#social-hours").textContent = "21hrs";
  document.querySelector("#social-last").textContent = "Last-Month - 23hrs";

  document.querySelector("#self-hours").textContent = "7hrs";
  document.querySelector("#self-last").textContent = "Last-Month - 11hrs";
});
