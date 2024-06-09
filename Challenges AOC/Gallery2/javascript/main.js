//selecting each photo
const photo_one = document.getElementById("photo_one");
const photo_two = document.getElementById("photo_two");
const photo_three = document.getElementById("photo_three");
const photo_four = document.getElementById("photo_four");
const photo_one_img = document.querySelector(".photo-one");
const phome = document.getElementById("phome"); //id added to img-1

//Adding event listner to each photo

//Event Listner for photo one ----------------------------------------
photo_one.addEventListener("mouseover", () => {
  const div = document.createElement("div");

  div.className = "box1";
  photo_one_img.appendChild(div);

  phome.style.opacity = 0;
  photo_two.style.opacity = 0;
  photo_three.style.opacity = 0;
  photo_four.style.opacity = 0;

  photo_one.addEventListener("mouseout", () => {
    div.style.display = "none";

    photo_one.style.opacity = 1;
    photo_two.style.opacity = 1;
    photo_three.style.opacity = 1;
    photo_four.style.opacity = 1;
    phome.style.opacity = 1;
  });
});

photo_two.addEventListener("mouseover", () => {
  const div2 = document.createElement("div");

  div2.className = "box2";
  div2.style.marginLeft;

  photo_one_img.appendChild(div2);

  photo_one.style.opacity = 1;
  photo_two.style.opacity = 0;
  photo_three.style.opacity = 0;
  photo_four.style.opacity = 0;

  photo_two.addEventListener("mouseout", () => {
    div2.style.display = "none";

    photo_one.style.opacity = 1;
    photo_two.style.opacity = 1;
    photo_three.style.opacity = 1;
    photo_four.style.opacity = 1;
  });
});
photo_three.addEventListener("mouseover", () => {
  const div2 = document.createElement("div");

  div2.className = "box3";

  photo_one_img.appendChild(div2);

  photo_one.style.opacity = 1;
  photo_two.style.opacity = 1;
  photo_three.style.opacity = 0;
  photo_four.style.opacity = 0;

  photo_three.addEventListener("mouseout", () => {
    photo_one.style.opacity = 1;
    photo_two.style.opacity = 1;
    div2.style.display = "none";
    photo_three.style.opacity = 1;
    photo_four.style.opacity = 1;
  });
});
photo_four.addEventListener("mouseover", () => {
  const div = document.createElement("div");

  div.className = "box4";
  photo_one_img.appendChild(div);

  photo_one.style.opacity = 1;
  photo_two.style.opacity = 1;
  photo_three.style.opacity = 1;
  photo_four.style.opacity = 0;

  photo_four.addEventListener("mouseout", () => {
    div.style.display = "none";

    photo_one.style.opacity = 1;
    photo_two.style.opacity = 1;
    photo_three.style.opacity = 1;
    photo_four.style.opacity = 1;
  });
});
