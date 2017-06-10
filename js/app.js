//https://www.reddit.com/r/futureporn.json



(function(){
  function getInfo(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function(){
      var response = JSON.parse(this.responseText);
      console.log(response.data.children[1].data);

      var createDiv1 = document.createElement("div");
      createDiv1.className = "boxes";
      createDiv1.id = "box1";
      mainContainer.appendChild(createDiv1);

      var firstTitle = document.createElement("div");
      firstTitle.className = "titles";
      firstTitle.innerHTML = response.data.children[1].data.title;
      createDiv1.appendChild(firstTitle);

      var imageDiv1 = document.createElement("div");
      imageDiv1.className = "images";
      imageDiv1.id = "imageDiv1";
      createDiv1.appendChild(imageDiv1);
      var firstImage = document.createElement("img");
      firstImage.id = "firstImage";
      firstImage.src = response.data.children[1].data.preview.images[0].source.url;
     imageDiv1.appendChild(firstImage);
     imageDiv1.addEventListener("click", function(){
      window.open(response.data.children[1].data.preview.images[0].source.url);
     });

     var createDiv2 = document.createElement("div");
     createDiv2.className = "boxes";
     createDiv2.id = "box2";
     mainContainer.appendChild(createDiv2);


     var secondTitle = document.createElement("div");
     secondTitle.className = "titles";
     secondTitle.innerHTML = response.data.children[2].data.title;
     createDiv2.appendChild(secondTitle);

     var imageDiv2 = document.createElement("div");
     imageDiv2.className = "images";
     createDiv2.appendChild(imageDiv2);
     var secondImage = document.createElement("img");
     secondImage.src = response.data.children[2].data.preview.images[0].source.url;
     imageDiv2.appendChild(secondImage);

     //mainContainer.appendChild(document.createElement("br"));

     var createDiv3 = document.createElement("div");
     createDiv3.className = "boxes";
     createDiv3.id = "box3";
     mainContainer.appendChild(createDiv3);

     var thirdTitle = document.createElement("div");
     thirdTitle.className = "titles";
     thirdTitle.innerHTML = response.data.children[3].data.title;
     createDiv3.appendChild(thirdTitle);

     var imageDiv3 = document.createElement("div");
     imageDiv3.className = "images";
     createDiv3.appendChild(imageDiv3);
     var thirdImage = document.createElement("img");
     thirdImage.src = response.data.children[3].data.preview.images[0].source.url;
     imageDiv3.appendChild(thirdImage);

     var createDiv4 = document.createElement("div");
     createDiv4.className = "boxes";
     createDiv4.id = "box4";
     mainContainer.appendChild(createDiv4);

     var fourthTitle = document.createElement("div");
     fourthTitle.className = "titles";
     fourthTitle.innerHTML = response.data.children[4].data.title;
     createDiv4.appendChild(fourthTitle);

     var imageDiv4 = document.createElement("div");
     imageDiv4.className = "images";
     createDiv4.appendChild(imageDiv4);
     var fourthImage = document.createElement("img");
     fourthImage.src = response.data.children[4].data.preview.images[0].source.url;
     imageDiv4.appendChild(fourthImage);



  });
    oReq.open("GET", "https://www.reddit.com/r/futureporn.json");
    oReq.send();
}

getInfo();









})();