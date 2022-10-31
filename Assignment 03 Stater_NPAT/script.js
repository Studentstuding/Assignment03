"use strict";
//Submit button
const email = document.getElementById("email");
const checkmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const infoDetail = document.querySelector(".info-detail");
const infoForm = document.getElementById("info-form");

document.getElementById("submit").addEventListener("click", function () {
  if (!checkmail.test(email.value)) {
    alert("Hãy nhập địa chỉ mail hợp lệ!\nVí dụ: Example@gmail.com");
  } else {
    //Cho hiển thị;
    infoDetail.classList.remove("hide");
    infoForm.classList.add("hide");
  }
});
//Hover info
const titleInfo = document.querySelectorAll(".title-info");
const btnViewmore = document.querySelectorAll(".bg-warning");
// const detaiInfo = document.querySelector(".detail-info");

// const titleInfo = document.querySelector(".title-info");
// const btnViewmore = document.querySelector(".bg-warning");
const detaiInfo = document.querySelectorAll(".detail-info");

for (let i = 0; i < titleInfo.length; i++)
  // for (let i = 0; i < btnViewmore.length; i++)
  //     titleInfo[i].addEventListener("mouseover", function () {
  //       btnViewmore[i].classList.remove("d-none");
  //     });

  titleInfo[i].addEventListener("mouseover", function () {
    if (btnViewmore[i].classList.contains("d-none")) {
      btnViewmore[i].classList.remove("d-none");
    } else {
      btnViewmore[i].classList.add("d-none");
    }
  });
for (let i = 0; i < btnViewmore.length; i++)
  btnViewmore[i].addEventListener("click", function () {
    if (btnViewmore[i].textContent === "View More") {
      btnViewmore[i].textContent = "View Less";
      detaiInfo[i].classList.remove("d-none");
    } else {
      btnViewmore[i].textContent = "View More";
      detaiInfo[i].classList.add("d-none");
    }
  });
