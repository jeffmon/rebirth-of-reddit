//https://www.reddit.com/r/futureporn.json



(function(){

  function getInfo(URL){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", inputData);
    oReq.open("GET", URL);
    oReq.send();
  }

  function inputData(){
    var fastenate = document.createElement("div");
    fastenate.id = "fastenate";
    mainContainer.appendChild(fastenate);

    var image1 = document.createElement("img");
    image1.src = "/media/1.png";
    fastenate.appendChild(image1);

    var header = document.createElement("div");
    header.id = "header";
    mainContainer.appendChild(header);
    var random = document.createElement("p");
    random.className = "headerLinks";
    random.id = "random";
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

    var response = JSON.parse(this.responseText);
    var boxDiv, imgTitle, imgDiv, img, posterDate, date;
    var newArr = [];
    for(var i = 0; i < 5; i++){
      if(response.data.children[i].data.stickied === false){
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

        posterDate = document.createElement("div");
        posterDate.className = "posterDate";
        date = response.data.children[20].data.created_utc;
        posterDate.innerHTML = "By " + response.data.children[i].data.author + " &#149" + " " + timeAgoFromEpochTime(response.data.children[i].data.created_utc) + " &#149 " + response.data.children[i].data.ups + " upvoted";

        boxDiv.appendChild(posterDate);





      }
    }


  }

getInfo("https://www.reddit.com/r/futureporn.json");

var targetRandom = document.getElementById("random");
console.log(targetRandom);
function randomButton(){

  random.addEventListener("click", getInfo("https://www.reddit.com/r/random.json"));
}



}());






