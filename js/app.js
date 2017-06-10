//https://www.reddit.com/r/futureporn.json
(function(){

  function getInfo(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", inputData);
    oReq.open("GET", "https://www.reddit.com/r/futureporn.json");
    oReq.send();
  }

  function inputData(){
    var response = JSON.parse(this.responseText);
    var boxDiv, imgTitle, imgDiv, img;
    console.log(response.data.children[0].data.stickied);
    for(var i = 0; i < 5; i++){
      if(response.data.children[i].data.stickied === false){
        boxDiv = document.createElement("div");
        boxDiv.className = "boxes";
        mainContainer.appendChild(boxDiv);

        imgTitle = document.createElement("div");
        imgTitle.className = "titles";
        imgTitle.innerHTML = response.data.children[i].data.title;
        boxDiv.appendChild(imgTitle);

        imgDiv = document.createElement("div");
        imgDiv.className = "images";
        boxDiv.appendChild(imgDiv);
        img = document.createElement("img");
        img.src = response.data.children[i].data.preview.images[0].source.url;
        imgDiv.appendChild(img);
        imgDiv.addEventListener("click", function(){
          lightbox.open(img);
        });
      }
    }

  }

getInfo();



}());


