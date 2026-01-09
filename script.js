const courses = [
  { id: 1, title: "Web Development", instructor: "Meta" },
  { id: 2, title: "Data Structures", instructor: "Google" },
  { id: 3, title: "Machine Learning", instructor: "Stanford" },
  { id: 4, title: "Python for Everybody", instructor: "University of Michigan" }
];

let enrolled = JSON.parse(localStorage.getItem("enrolled")) || [];

function login() {
  const user = document.getElementById("username").value;
  if (user) {
    localStorage.setItem("user", user);
    window.location.href = "index.html";
  }
}

function enroll(id) {
  if (!enrolled.includes(id)) {
    enrolled.push(id);
    localStorage.setItem("enrolled", JSON.stringify(enrolled));
    alert("Enrolled Successfully!");
  }
}

function renderCourses(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  courses.forEach(c => {
    const div = document.createElement("div");
    div.className = "course";
    div.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.instructor}</p>
      <button onclick="enroll(${c.id})">Enroll</button>
    `;
    container.appendChild(div);
  });
}

function renderEnrolled() {
  const container = document.getElementById("enrolled-courses");
  if (!container) return;

  enrolled.forEach(id => {
    const c = courses.find(x => x.id === id);
    if (c) {
      const div = document.createElement("div");
      div.className = "course";
      div.innerHTML = <h3>${c.title}</h3>;
      container.appendChild(div);
    }
  });
}

renderCourses("course-list");
renderCourses("all-courses");
renderEnrolled();
