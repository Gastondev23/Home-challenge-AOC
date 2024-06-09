const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");
const caption = document.getElementById("caption");

const container = document.querySelector(".container");

photo1.addEventListener("mouseover", () => {
  const div = document.createElement("div");

  div.classList.add("box", "box1");

  const h2 = document.createElement("h2");

  h2.className = "box-caption-header";

  h2.innerHTML = "FONNEC <br/> FOX";

  const p = document.createElement("p");

  p.className = "box-caption-country";
  p.innerText = "South Africa";

  const link = document.createElement("a");

  link.setAttribute("href", "https://google.com");
  link.textContent = "Know More >";

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(link);
  container.appendChild(div);
  photo4.style.opacity = 0;
  photo3.style.opacity = 0;

  photo2.style.opacity = 1;
  photo2.style.width = "100px";

  photo2.style.top = "-3%";
  photo2.style.marginTop = "-55%";
  photo2.style.marginLeft = "-0%";
  caption.style.display = "none";

  photo1.style.opacity = 0;

  photo1.addEventListener("mouseout", () => {
    div.style.display = "none";

    photo1.style.opacity = 1;
    photo4.style.opacity = 1;
    photo2.style.opacity = 1;
    photo3.style.opacity = 1;
    photo2.style.position = "";
    caption.style.display = "block";
    photo2.style.width = "590px";
    photo2.style.marginTop = "0";
    photo2.style.marginLeft = "0px";
  });
});

photo2.addEventListener("mouseover", () => {
  const div = document.createElement("div");

  div.className = "box";

  const h2 = document.createElement("h2");

  h2.className = "box-caption-header";

  h2.innerHTML = "HUMPBACK <br/> WHALE";
  photo4.style.opacity = 0;
  photo3.style.opacity = 0;

  const p = document.createElement("p");

  p.className = "box-caption-country";
  p.innerText = "South Africa";

  const link = document.createElement("a");

  link.setAttribute("href", "https://google.com");
  link.textContent = "Know More >";

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(link);
  container.appendChild(div);

  div.style.left = "27%";

  photo2.style.opacity = 0;

  photo2.addEventListener("mouseout", () => {
    div.style.display = "none";

    photo2.style.opacity = 1;
    photo4.style.opacity = 1;
    photo3.style.opacity = 1;
  });
});

photo3.addEventListener("mouseover", () => {
  const div = document.createElement("div");

  div.className = "box";

  const h2 = document.createElement("h2");

  h2.className = "box-caption-header";

  h2.innerHTML = "COMMON BROWN <br/> BABOON";

  const p = document.createElement("p");

  p.className = "box-caption-country";
  p.innerText = "South Africa";

  const link = document.createElement("a");

  link.setAttribute("href", "https://google.com");
  link.textContent = "Know More >";
  photo4.style.opacity = 0;

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(link);
  container.appendChild(div);

  div.style.left = "35%";

  photo3.style.opacity = 0;

  photo3.addEventListener("mouseout", () => {
    div.style.display = "none";

    photo3.style.opacity = 1;
    photo4.style.opacity = 1;
  });
});

photo4.addEventListener("mouseover", () => {
  const div = document.createElement("div");

  div.className = "box";

  const h2 = document.createElement("h2");

  h2.className = "box-caption-header";

  h2.innerHTML = "SPOTTED <br/> DEER";

  const p = document.createElement("p");

  p.className = "box-caption-country";
  p.innerText = "India";

  const link = document.createElement("a");

  link.setAttribute("href", "https://google.com");
  link.textContent = "Know More >";

  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(link);
  container.appendChild(div);

  photo4.style.opacity = 0;

  photo4.addEventListener("mouseout", () => {
    div.style.display = "none";

    photo4.style.opacity = 1;
  });
});
