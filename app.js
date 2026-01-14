const ARTICLES = [
  { title:"Understanding the difference between grid-template and grid-auto", date:"Oct 09, 2018",
    excerpt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { title:"Recreating the GitHub Contribution Graph with CSS Grid Layout", date:"Jun 18, 2018",
    excerpt:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
  { title:"CSS Flexbox vs Grid", date:"Feb 12, 2019",
    excerpt:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." },
];

const q = document.querySelector("#q");
const count = document.querySelector("#count");
const results = document.querySelector("#results");

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // escape for RegExp [web:9]
const mark = (text, s) =>
  !s ? text : text.replace(new RegExp(`(${esc(s)})`, "ig"), "<mark>$1</mark>"); // highlight with <mark> [web:26][web:9]

function render() {
  const s = q.value.trim();
  const sLower = s.toLowerCase();

  const filtered = ARTICLES.filter(a =>
    !s || (a.title + " " + a.excerpt).toLowerCase().includes(sLower) // includes() checks substring [web:20]
  );

  count.textContent = `${filtered.length} posts were found.`;

  results.innerHTML = filtered.map(a => `
    <article>
      <h3>${mark(a.title, s)}</h3>
      <small>${a.date}</small>
      <p>${mark(a.excerpt, s)}</p>
    </article>
  `).join("");
}

q.addEventListener("input", render);
render();
