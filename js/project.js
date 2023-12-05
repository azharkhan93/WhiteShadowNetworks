const projectsArray = [
    {
      img: "./images/img-1.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Design",
    },
    {
      img: "./images/img-2.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Design",
    },
    {
      img: "./images/img-3.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Advertising",
    },
    {
      img: "./images/img-4.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Advertising",
    },
    {
      img: "./images/img-5.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Advertising",
    },
    {
      img: "./images/img-6.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Songs",
    },
    {
      img: "./images/img-7.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Songs",
    },
    {
      img: "./images/img-8.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Advertising",
    },
    {
      img: "./images/img-9.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Advertising",
    },
    {
      img: "./images/img-10.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Design",
    },
    {
      img: "./images/img-11.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Design",
    },
    {
      img: "./images/img-12.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      live: "/#",
      code: "/#",
      tag: "Design",
    },
  ];
  
  const projectsContainer = document.querySelector(".projects-container");
  const tabBtns = document.querySelectorAll(".tab-btn");
  
  function renderProjects(array) {
    projectsContainer.textContent = "";
  
    array.map((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
  
      projectDiv.innerHTML = `
      <img src=${project.img} alt="" />
      <div class="project-info">
        <p>${project.description}</p>
        <div class="project-btns">
          <button>Live</button>
          <button>Code</button>
        </div>
      </div>
      `;
  
      projectsContainer.append(projectDiv);
    });
  }
  
  tabBtns.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabBtns.forEach((t) => t.classList.remove("active"));
  
      this.classList.add("active");
  
      if (tab.id === "all") {
        renderProjects(projectsArray);
      } else {
        const filtredProjects = projectsArray.filter(
          (project) => project.tag === tab.id
        );
  
        renderProjects(filtredProjects);
      }
    });
  });
  
  renderProjects(projectsArray);