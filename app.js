const gdData = [
    {
      topic: "What we learnt From Covid",
      category: "Political",
      fgdpoints: ["wet food", "dry food", "<strong>any</strong> food"],
      gdDate: 2016,
      discussion: ["first", "Second","Third"],
      description : "We learnt the importance of the Freedom from Covid.We also got the real time example of how unpredictable life is no matter how much we plan it's not in our hand , So live your life in present at its fullest because you never know kal ho na ho.",
      conclusion: "khatam tata",
      photo: "PostPhotos/covi19.jpg"
    },
    {
      topic: "How AI changed the world",
      category: "Technology",
      gdDate: 2008,
      discussion: ["first", "Second","Third"],
      description : "AI is basically a double sided sword for us it has lot of application as well as lots of drawbacks at the same time.",
      conclusion: "khatam tata",
      photo: "PostPhotos/ai.jpg"
    },
    {
      topic: "What Should Youth Do",
      category: "Spirituality",
      discussion: ["first", "Second","Third"],
      fgdpoints: ["tuna", "catnip", "celery"],
      gdDate: 2012,
      description : "Youth are the key asset of the nation if youths are doing good and productive enough then they make a country a Superpower. In youth thats is are of 20 to 30 is the most energetic phase of life so utilse it Properly.",
      conclusion: "khatam tata",
      photo: "PostPhotos/youth.jpg"
    }
  ];
  

  function foods(foods) {
    return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map(food => `<li>${food}</li>`).join("")}
  </ul>
  `;
  }
  
  function gdTemplate(gd) {
    return `

    <div class="gd-card">
    <div class="data">
        <div class="img-t">
            <img src="${gd.photo}" alt="">
        </div>
        <div class="ge-text">
            <p class="topic"><b>Topic: </b><br>${gd.topic}<span class="species">(${gd.category})</span></p>
            <p class="gd-date"><b>Date: </b></p>
            <p class="gd-points"><b>Points of Discussion: </b>
            <ul>
             <li>${gd.discussion}</li>
            </ul></p>
            <p class="des"><b>Description: </b><br>${gd.description}</p>
            <p class="conclusion"><b>Conclusion: </b>${gd.conclusion}</p>
        </div>
    </div>
</div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Posts(${gdData.length} results)</h1>
    ${gdData.map(gdTemplate).join("")}
    <p class="footer">These ${gdData.length} posts were added recently. Check back soon for updates...</p>
  `;
  