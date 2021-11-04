const gdData = [
  {
    topic: "Diwali....",
    category: "Personal",
    gdDate: "November 5 , 2021",
    discussion: ["Meaning of Diwali <br>","<li>My Pre Diwali</li>","<br><li>My NewDiwali</li>"],
    description : "Diwali the festival of light .but children just know the diwali as the festival of fire cracker but I was always amazed to know that fire  cracker were invented just of 1000 years but the significance of diwali is beyond that i.e. around 5000 years then how Firecrackers are included in that ....(don't worry I am nt gonna give any <b>Gyan</b>)...Diwali is actually festival of joy when someone whos is most loved one is returning after long time then the feeling of joy is the essence of Diwali . I can not say how one should celebrate diwali but let me tell my personal experience on Diwali.....In my childhood(I am still find myself as Kid till now) I was a big firecracker freak I used to buy Kilos of firecraker in full big jute bag(bori in UP) and used to burst it from Dhantesras to all the way till chath on daily basis and for me it is like a cool dude thing but I do not know how it happened in my class 9th diwali in 2016 suddenly I dropped the idea of buying firecracker this time it was shocking for myparents for my firends to witness such drastic shift in my behaviour...and rather that appreciating my decision everyone Including my parents thought I am unsatisfied with the amount they are giving me to buy firecracker(It was already around 1200) but for this time they offer my 2300 and said beta dont take  any burden  enjoy your life at its full...I replied dad I didn't find myself elegible to do this Burning Laxmi on the Laxmi day moreover it is threatning to mother nature and specially those innocent animals who have equal right on earth like us...So this thing makes me guilty and after realising this I don't wanna do this sin again and waise bhi Firecrackers aren't there at the time of Lord Shri Ram so these are not part of ritual...and trust me from that diwali onward I've never burst firecracker on Diwali insted I used to plant trees of number eaual to my age...I never say only not burning fire cracker can evaccuate all air pollutant or don't suggest anynoe do that but just think for trees and innocent animals... <b>Happy Diwali !!!</b>",
    conclusion: "khatam tata",
    photo: "PostPhotos/diwali.jpg",
    author:"Vikas Kumar Gond",
    audioSum:"Audios/"
  },
  {
    topic: "Role of Entertainment in Life ",
    category: "Lifestyle",
    gdDate: "November 3 , 2021",
    discussion: ["first", "Second","Third"],
    description : "yet to be discussed",
    conclusion: "khatam tata",
    photo: "PostPhotos/Entertainment.jpg",
    author:"Vikas Kumar Gond",
    audioSum:"Audios/"
  },
  {
    topic: "What Should Youth Do",
    category: "Spirituality",
    discussion: ["first", "Second","Third"],
    gdDate: "October 23 , 2021",
    description : "Youth are the key asset of the nation if youths are doing good and productive enough then they make a country a Superpower. In youth thats is are of 20 to 30 is the most energetic phase of life so utilse it Properly.",
    conclusion: "khatam tata",
    photo: "PostPhotos/youth.jpg",
    author:"Vikas Kumar Gond",
    audioSum:"Audios/youth.m4a"
  },
    {
      topic: "What we learnt From Covid",
      category: "Political",
      fgdpoints: ["wet food", "dry food", "<strong>any</strong> food"],
      gdDate: "October 18 , 2021",
      discussion: ["first", "Second","Third"],
      description : "We learnt the importance of the Freedom from Covid.We also got the real time example of how unpredictable life is no matter how much we plan it's not in our hand , So live your life in present at its fullest because you never know kal ho na ho.",
      conclusion: "khatam tata",
      photo: "PostPhotos/covi19.jpg" ,
      author:"Vikas Kumar Gond",
    audioSum:"Audios/COVID19.m4a"
    },
    {
      topic: "How AI changed the world",
      category: "Technology",
      gdDate: "September 15 , 2021",
      discussion: ["first", "Second","Third"],
      description : "AI is basically a double sided sword for us it has lot of application as well as lots of drawbacks at the same time.",
      conclusion: "khatam tata",
      photo: "PostPhotos/ai.jpg" ,
      author:"Vikas Kumar Gond",
    audioSum:"Audios/AI.m4a"
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
            <p class="gd-date"><b>Date: </b>${gd.gdDate}</p>
            <p class="gd-points"><b>Points of Discussion: </b>
            <ul>
             <li>${gd.discussion}</li>
            </ul></p>
            <p class="des"><b>Description: </b><br>${gd.description}</p>
            <p>Don't want to read , listen summary : <br><audio
            controls
            src="${gd.audioSum}">
                Your browser does not support the
                <code>audio</code> element.
        </audio></p>
            <p class="conclusion"><b>Conclusion: </b>${gd.conclusion}</p>
            <p>Author: <b>${gd.author}</b></p>
        </div>
    </div>
</div>
    `;
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">GD Blog Posts(${gdData.length} results)</h1>
    ${gdData.map(gdTemplate).join("")}
    <p class="footer">These ${gdData.length} posts were added recently. Check back soon for updates...</p>
  `;
  
  