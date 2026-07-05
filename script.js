const apps = [
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    url: "https://www.youtube.com/shorts"
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/reels/"
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    url: "https://www.facebook.com/reel/"
  },
  {
    name: "Snapchat Spotlight",
    icon: "fa-brands fa-snapchat",
    url: "https://www.snapchat.com/spotlight"
  },
  {
    name: "Moj",
    icon: "fa-solid fa-video",
    url: "https://mojapp.in/"
  },
  {
    name: "Josh",
    icon: "fa-solid fa-bolt",
    url: "https://share.myjosh.in/"
  },
  {
    name: "Chingari",
    icon: "fa-solid fa-fire",
    url: "https://chingari.io/"
  },
  {
    name: "ShareChat",
    icon: "fa-solid fa-comments",
    url: "https://sharechat.com/"
  },
  {
    name: "TikTok",
    icon: "fa-brands fa-tiktok",
    url: "https://www.tiktok.com/"
  },
  {
    name: "Pinterest",
    icon: "fa-brands fa-pinterest",
    url: "https://www.pinterest.com/"
  },
  {
    name: "X",
    icon: "fa-brands fa-x-twitter",
    url: "https://x.com/"
  },
  {
    name: "Threads",
    icon: "fa-brands fa-threads",
    url: "https://www.threads.net/"
  },
  {
    name: "Dailymotion",
    icon: "fa-solid fa-circle-play",
    url: "https://www.dailymotion.com/"
  },
  {
    name: "Vimeo",
    icon: "fa-brands fa-vimeo",
    url: "https://vimeo.com/"
  }
];

const appGrid = document.getElementById("appGrid");

function loadApps(list = apps) {
  appGrid.innerHTML = "";

  list.forEach(app => {
    appGrid.innerHTML += `
      <div class="app">
        <div class="app-icon" onclick="openLink('${app.url}')">
          <i class="${app.icon}"></i>
        </div>

        <p>${app.name}</p>

        <button onclick="addFavorite('${app.name}')">
          ⭐ Favorite
        </button>
      </div>
    `;
  });
}

loadApps();

function openLink(url){

    window.location.href = url;

}

function searchApps() {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const filtered = apps.filter(app =>
    app.name.toLowerCase().includes(input)
  );

  loadApps(filtered);
}

function addFavorite(appName){

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if(!favorites.includes(appName)){
        favorites.push(appName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(appName + " ❤️ Favorite में जोड़ दिया गया");
    }else{
        alert("यह ऐप पहले से Favorite है।");
    }

}

function goHome(){

    loadApps();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

function goSearch() {
  document.getElementById("searchInput").focus();
}

function goFavorite(){

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const filtered = apps.filter(app => favorites.includes(app.name));

    loadApps(filtered);

}

function goSettings(){

    let option = prompt(
`⚙️ Settings

1. Theme Change
2. Share App
3. About App
4. Rate App

Number Enter करें`
);

    if(option=="1"){
        toggleTheme();
    }
    else if(option=="2"){
        shareApp();
    }
    else if(option=="3"){
        aboutApp();
    }
    else if(option=="4"){
        rateApp();
    }

}

function closeSettings(){

    document.getElementById("settingsPanel").style.display="none";

}

function clearFavorites(){

    localStorage.removeItem("favorites");

    alert("Favorites Clear हो गए");

}

window.addEventListener("load", function () {
    setTimeout(function () {
        const splash = document.getElementById("splash");
        if (splash) {
            splash.style.display = "none";
        }
    }, 2000);
});
function toggleTheme(){

    document.body.classList.toggle("light-mode");

}

function shareApp(){

    navigator.clipboard.writeText(window.location.href);

    alert("App Link Copy हो गया।");

}

function aboutApp(){

    alert(
`🎬 All Reels Hub

Version : 1.0

Developer : Googlee Ayan

एक जगह सभी Reels Apps`
    );

}

function rateApp(){

    window.open("https://play.google.com","_blank");

}