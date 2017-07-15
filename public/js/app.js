(function() {

  var fastenate = document.createElement("div");
  fastenate.id = "fastenate";
  mainContainer.appendChild(fastenate);

  var image1 = document.createElement("img");
  image1.src = "/media/1.png";
  fastenate.appendChild(image1);

  var subName = document.createElement("div");
  subName.id = "subName";
  fastenate.appendChild(subName);

  var header = document.createElement("div");
  header.id = "header";
  mainContainer.appendChild(header);
  var random = document.createElement("p");
  random.className = "headerLinks";
  random.id = "randomButton";
  random.innerHTML = "RANDOM &#149 ";
  header.appendChild(random);
  var myBoards = document.createElement("p");
  myBoards.className = "headerLinks";
  myBoards.id = "myBoards";
  myBoards.innerHTML = "  " + " MY BOARDS &#149";
  header.appendChild(myBoards);
  var getTheApp = document.createElement("p");
  getTheApp.className = "headerLinks";
  getTheApp.id = "getTheApp";
  getTheApp.innerHTML = " GET THE APP";
  header.appendChild(getTheApp);

  var instagram = document.createElement("img");
  instagram.src = "/assets/instagram_grey.svg";
  instagram.id = "instagram";
  instagram.className = "socialM";
  header.appendChild(instagram);

  var facebook = document.createElement("img");
  facebook.src = "/assets/facebook_grey.svg";
  facebook.id = "instagram";
  facebook.className = "socialM";
  header.appendChild(facebook);

  var postCount = 0;

  function getInfo(URL) {
    postCount += 4;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", inputData);
    oReq.open("GET", URL);
    oReq.send();
  }

  function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  function timeAgoFromEpochTime(epoch) {
    var secs = ((new Date()).getTime() / 1000) - epoch;
    Math.floor(secs);
    var minutes = secs / 60;
    secs = Math.floor(secs % 60);
    if (minutes < 1) {
      return secs + (secs > 1 ? ' seconds ago' : ' second ago');
    }
    var hours = minutes / 60;
    minutes = Math.floor(minutes % 60);
    if (hours < 1) {
      return minutes + (minutes > 1 ? ' minutes ago' : ' minute ago');
    }
    var days = hours / 24;
    hours = Math.floor(hours % 24);
    if (days < 1) {
      return hours + (hours > 1 ? ' hours ago' : ' hour ago');
    }
    var weeks = days / 7;
    days = Math.floor(days % 7);
    if (weeks < 1) {
      return days + (days > 1 ? ' days ago' : ' day ago');
    }
    var months = weeks / 4.35;
    weeks = Math.floor(weeks % 4.35);
    if (months < 1) {
      return weeks + (weeks > 1 ? ' weeks ago' : ' week ago');
    }
    var years = months / 12;
    months = Math.floor(months % 12);
    if (years < 1) {
      return months + (months > 1 ? ' months ago' : ' month ago');
    }
    years = Math.floor(years);
    return years + (years > 1 ? ' years ago' : ' years ago');
  }

  function inputData() {
    var response = JSON.parse(this.responseText);
    removeElementsByClass("boxes");
    currentData = this.responseURL;
    var boxDiv, imgDiv, img, imgTitle, posterDate;

    subName.innerHTML = response.data.children[0].data.subreddit_name_prefixed;

    for (var i = 0; i <= postCount; i++) {
      if (response.data.children[i].data.stickied === false && response.data.children[i].data.preview.images[0].source.url !== false) {

        boxDiv = document.createElement("div");
        boxDiv.className = "boxes";
        mainContainer.appendChild(boxDiv);

        imgDiv = document.createElement("div");
        imgDiv.className = "images";
        boxDiv.appendChild(imgDiv);
        img = new Image();
        img.src = response.data.children[i].data.preview.images[0].source.url;
        img.width = 500;
        img.setAttribute("data-jslghtbx-group", "mygroup1");
        img.setAttribute("data-jslghtbx-index", lightbox.thumbnails.length);
        img.setAttribute("data-jslghtbx-caption", response.data.children[i].data.title);
        lightbox.thumbnails.push(img);
        imgDiv.appendChild(img);

        imgTitle = document.createElement("div");
        imgTitle.className = "titles";
        imgTitle.innerHTML = response.data.children[i].data.title;
        boxDiv.appendChild(imgTitle);

        posterDate = document.createElement("div");
        posterDate.className = "posterDate";
        posterDate.innerHTML = "By " + response.data.children[i].data.author + " &#149" + " " + timeAgoFromEpochTime(response.data.children[i].data.created_utc) + " &#149 " + response.data.children[i].data.ups + " upvoted";

        boxDiv.appendChild(posterDate);
      }
    }
  }

  getInfo("https://www.reddit.com/r/futureporn.json");

  var randomList = ["http://www.reddit.com/r/blackpeopletwitter.json", "http://www.reddit.com/r/comics.json", "http://www.reddit.com/r/thewaywewere.json", "http://www.reddit.com/r/oldschoolcool.json", "http://www.reddit.com/r/pic.json", "http://www. reddit.com/r/pics.json", "http://www.reddit.com/r/earthporn.json", "http://www.reddit.com/r/skyporn.json", "http://www.reddit.com/r/astrophotography.json", "http://www.reddit.com/r/spaceporn.json", "http://www.reddit.com/r/itookapicture.json", "http://www.reddit.com/r/roomporn.json", "http://www.reddit.com/r/100yearsago.json", "http://www.reddit.com/r/foodporn.json", "http://www.reddit.com/r/woahdude.json", "http://www.reddit.com/r/mildlyinteresting.json", "http://www.reddit.com/r/pics.json", "http://www.reddit.com/r/nocontextpics.json", "http://www.reddit.com/r/gamecollecting.json", "http://www.reddit.com/r/tattoos.json", "http://www.reddit.com/r/travel.json"];

  var randomIndex = 0;
  var previousIndex = 0;

  function randVal() {
    while (randomIndex === previousIndex) {
      randomIndex = Math.floor(Math.random() * randomList.length) + 1;
    }
    previousIndex = randomIndex;
    return randomList[randomIndex];
  }

  var randomSubreddit = randVal();

  var targetRandom = document.getElementById("randomButton");
  var targetMyBoards = document.getElementById("myBoards");
  var targetGetTheApp = document.getElementById("getTheApp");

  var currentData = "http://www.reddit.com/r/futureporn.json";

  targetRandom.addEventListener("click", getInfo.bind(this, randomSubreddit));
  targetRandom.addEventListener("click", function() {
    removeElementsByClass("boxes");
    postCount = 4;
    randomSubreddit = randVal();
  });

  targetMyBoards.addEventListener("click", getInfo.bind(this, "http://www.reddit.com/r/futureporn.json"));
  targetMyBoards.addEventListener("click", function() {
    removeElementsByClass("boxes");
    postCount = 4;
  });

  targetGetTheApp.addEventListener("click", getInfo.bind(this, "http://www.reddit.com/r/colorizedhistory.json"));
  targetGetTheApp.addEventListener("click", function() {
    removeElementsByClass("boxes");
    postCount = 4;
  });

  document.addEventListener('scroll', function() {
    if (document.body.scrollHeight ==
      document.body.scrollTop +
      window.innerHeight) {
      getInfo(currentData);
    }
  });

}());
