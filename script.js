const newsData = [
  {
    category: "Technology",
    icon: "💻",
    title: "AI is reshaping global industries",
    desc: "Experts discuss the rapid rise of automation and machine learning."
  },
  {
    category: "Sports",
    icon: "⚽",
    title: "Historic win in championship",
    desc: "Fans celebrate as the underdogs claim victory."
  },
  {
    category: "World",
    icon: "🌍",
    title: "Global leaders meet for summit",
    desc: "Discussions focus on climate and economic recovery."
  },
  {
    category: "Technology",
    icon: "📱",
    title: "Next-gen smartphones unveiled",
    desc: "Companies introduce innovative features and designs."
  }
];

const container = document.getElementById("news-container");

function displayNews(items) {
  container.innerHTML = "";
  items.forEach(article => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <h2>${article.icon} ${article.title}</h2>
      <p>${article.desc}</p>
    `;

    container.appendChild(card);
  });
}

function filterNews(category) {
  if (category === "All") {
    displayNews(newsData);
  } else {
    const filtered = newsData.filter(item => item.category === category);
    displayNews(filtered);
  }
}

displayNews(newsData);