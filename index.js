// ****************************SWITCH TO PC************************************

var switchToPcBtn=document.querySelector('.switchToPcBtn');
switchToPcBtn.addEventListener('click',()=>{
  setTimeout(() => {
    switchToPcBtn.parentElement.style.display='none';
  }, 500);
});


// **************************Perpetual Animation Starts Here**********************

function PerpetualAnimation(){
function moveBox(boxName,initialLeftValue,initialTopValue,finalLeftValue,finalTopValue,imgName,time,delayValue,moveX,moveY) {
    const boxMovementKeyframes = [
    { top: initialTopValue, left: initialLeftValue},
    { top:finalTopValue, left: finalLeftValue }
  ];
  
  
    var wordpressBox = document.querySelectorAll(boxName);
    wordpressBox.forEach((element, index) => {
      var boxMovementTiming = {
        duration: time,
        iterations: Infinity,
        easing: 'linear',
        delay: index * delayValue // Adjusted delay value
      };
      element.style.opacity = '0.8';
      element.animate(boxMovementKeyframes,  boxMovementTiming );
      element.style.backgroundImage = `url("images/${imgName}")`;
    });
  }
  // function moveBox(boxName,initialLeftValue,initialTopValue,finalLeftValue,finalTopValue,imgName,time,delayValue,moveX,moveY)
  // moveBox(".htmlBox",'-2.5%','-2.5%','102.5vw','102.5vh',"6.png",8500,600);
  // moveBox(".cssBox",'12.5%','-50px','100vw','87.5vh',"2.png",10000,700);

  moveBox(".jsBox",'25%','-50px','100vw','75vh',"JS.png",10000,715);
  moveBox(".cssBox",'37.5%','-50px','100vw','62.5vh',"css.png",11000,1000);
  moveBox(".htmlBox",'50%','-50px','100vw','50vh',"html.png",7000,1000);
  moveBox(".wordpressBox",'62.5%','-50px','100vw','37.5vh',"wordpress.png",10500,2000);
  moveBox(".reactjsBox",'75%','-50px','100vw','25vh',"react js.png",4000,1000);
  if (window.innerWidth>800 )
 {
  moveBox(".chashmaBox",'87.5%','-50px','100vw','12.5vh',"figma.png",3000,1000);
}
}
  PerpetualAnimation();








  // ***********************************Navbar********************************
// function navbar(){
//   function navMenuAnimation(navMenuID, videoSrc){
//     // const navMenus = document.querySelector('.navbarMenusDiv');

//     const video = document.querySelector(navMenuID);

//     video.src = videoSrc;
//     video.autoplay = true;
//     video.muted = true;
 

//     video.addEventListener("click", () => {
//         video.play();
//     });
// }
// navMenuAnimation('#navHome', 'vidAnimations/navHome.mp4');
// navMenuAnimation('#navMiniProjects', 'vidAnimations/navMiniProjects.mp4');
// navMenuAnimation('#navRandomThoughts', 'vidAnimations/navRandomThoughts.mp4');
// }
// navbar();


// **************************************HAMBURGER MENU***********************************

hamburger = document.querySelector('#hamburger');
hamburgerLine1= document.querySelector('#hamburgerLine1');
hamburgerLine2= document.querySelector('#hamburgerLine2');
hamburgerLine3= document.querySelector('#hamburgerLine3');
hamburgerContent= document.querySelector('#hamburgerContent');

hamburgerInActive = true;


hamburger.addEventListener('click', () => {
  if(hamburgerInActive){
  hamburger.lastElementChild.style.transition = 'transform 0.2s';

  hamburger.lastElementChild.style.transform = 'rotate(90deg)' ;
  hamburgerContent.style.display = 'flex';
  setTimeout(() => {
    hamburger.lastElementChild.style.transform = ' rotate(90deg) translatex(10px)' ;
    hamburgerLine2.style.display = 'none';
    hamburgerLine1.style.transform = 'rotate(-45deg) translate(-16px, 0px)';
    hamburgerLine3.style.transform = 'rotate(45deg) translate(-16px, 0px)';
    hamburger.lastElementChild.style.transition = 'transform 0.2s';
    hamburgerLine1.style.transition = 'transform 0.2s';
    hamburgerLine3.style.transition = 'transform 0.2s';

   
  }, 200);
  hamburgerInActive=false;
}
else{


    hamburgerLine1.style.transform = '';
    hamburgerLine2.style.display = 'block';
    hamburgerLine3.style.transform = '';
    hamburger.lastElementChild.style.transform = ' translatex(0px) rotate(90deg)' ;
    hamburgerLine1.style.transition = 'transform 0.5s';
    hamburgerLine3.style.transition = 'transform 0.5s';
    
    hamburger.lastElementChild.style.transition = 'transform 0.5s';
    hamburger.lastElementChild.style.transform = 'rotate(0deg)' ;
    hamburgerContent.style.display = 'none';
    hamburgerInActive = true;
    setTimeout(() => {
    },200);
}
});
// ***********************************EXPLODING DP********************************

function explodingImage() {
	const mainImage = document.getElementById('main-image');
  
	const imageWidth = mainImage.offsetWidth;
	const imageHeight = mainImage.offsetHeight;
  
	const numCols = 15; // Number of columns in the grid
	const numRows = 15; // Number of rows in the grid
  
	const colWidth = Math.floor(imageWidth / numCols);
	const rowHeight = Math.floor(imageHeight / numRows);
  
	const adjustedWidth = colWidth/numCols;
	const adjustedHeight = rowHeight/numRows;
  
	for (let row = 0; row < numRows; row++) {
	  for (let col = 0; col < numCols; col++) {
		const imgShards = document.createElement('div');
		imgShards.className = 'draggable-image';
		imgShards.style.width = colWidth + 'px';
		imgShards.style.height = rowHeight + 'px';
		imgShards.style.left = col * colWidth + 'px';
		imgShards.style.top = row * rowHeight + 'px';
		imgShards.style.backgroundImage = `url(profile.png)`;
		imgShards.style.backgroundPosition = `-${col * colWidth}px -${row * rowHeight}px`;
    imgShards.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
  
		mainImage.appendChild(imgShards);
  
		imgShards.addEventListener('mouseover', explodeElement);
		// draggableElement.addEventListener('mouseout', unexplodeElement);
	  }
	}
  
	mainImage.style.width = adjustedWidth + 'px';
	mainImage.style.height = adjustedHeight + 'px';
  }
  
  explodingImage();
  
  
  function explodeElement() {
	this.style.transition = 'transform 0.5s ease-in-out';
	this.style.transform = `translate3d(${getRandomNumber()}px, ${getRandomNumber()}px, ${getRandomNumber()}px) rotateX(${getRandomNumber()}deg) rotateY(${getRandomNumber()}deg) rotateZ(${getRandomNumber()}deg)`;
	setTimeout(() => {
		unexplodeElement.call(this); // Reset the transform after the delay
	  }, 500);
	}
	
  
  function unexplodeElement() {
	this.style.transition = 'transform 0.3s linear';
	this.style.transform = 'translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0)';
  }
  
  function getRandomNumber() {
	return Math.random() * 800;
  }
  


// ************************************zeroGravity starts here**************************************
      

      
function zeroGravity(zeroGravityElement){
      
  gravityElements=document.querySelectorAll(zeroGravityElement);
  gravityElements.forEach(element => {
  function getRandomNumber(min, max){
    return (Math.random() * (max - min + 1)) + min;
  }

  translateXNum = getRandomNumber(0, 60);
  translateYNum = getRandomNumber(70, 120);
  rotateNum=getRandomNumber(100, 250);

var zeroGravityKeyFrames = [
  {transform: "translateY(0) translateX(0) rotate(0deg)"},
  {transform: `translateY(-${translateYNum/2}vh) translateX(-${translateXNum/2}vh) rotate(${rotateNum}deg`},
  {transform: `translateY(-${translateYNum}vh) translateX(-${translateXNum}vh)`},
  ];
  var zeroGravityTiming = {
    duration: 5000,
    iterations: 1,
    fill: "forwards",
    easing: "ease-in",  
  };    
    
    element.animate(zeroGravityKeyFrames, zeroGravityTiming);
  });}


// *****************************zeroGravity ends here**************************************

function calculateDistanceFromBottom(element) {
var rect = element.getBoundingClientRect();
var windowHeight = window.innerHeight;
var distanceFromBottom = windowHeight - rect.bottom;
return distanceFromBottom;
}


function freezeAnimations(className) {
className.forEach(element => {
var animations = element.getAnimations();
console.log(animations);
animations.forEach(animation => {
animation.pause();
});
});
}




// **********************HIGH GRAVITY DROP STARTS*******************************

function gravityDrop(gravityDropElement) {
var gravityElements = document.querySelectorAll(gravityDropElement);

freezeAnimations(gravityElements);

gravityElements.forEach(element => {


var highGravityKeyframes=[

{transform: `translateY(150vh) rotate(-50deg)`},
];
var highGravityTiming = {
duration: 2000,
iterations: 1,
fill: "forwards",
easing: "ease-in",  
};    

element.animate(highGravityKeyframes, highGravityTiming);
});
}

// **********************HIGH GRAVITY DROP ENDS*******************************

// ************************* normal gravity starts here*******************************

function normalGravity(normalGravityElement) {
var gravityElements = document.querySelectorAll(normalGravityElement);

freezeAnimations(gravityElements);

gravityElements.forEach(element => {


var highGravityKeyframes=[
{transform: "translateY(0) translateX(0) rotate(0deg)"},
];
var highGravityTiming = {
duration: 2000,
iterations: 1,
fill: "forwards",
easing: "ease-in",  
};    

element.animate(highGravityKeyframes, highGravityTiming);
});

}
// ************************* normal gravity ends here*******************************



// ******************************gravityControlFunction starts here*******************************

function gravityControlFunction(buttonElement,gravityAnimationElements){

var gravityControlButton = document.querySelector(buttonElement);
var curBtnState = "normal";

gravityControlButton.addEventListener("click", function() {

if (curBtnState === "normal") {
zeroGravity(gravityAnimationElements);
curBtnState = "zeroGravity";
gravityControlButton.style.boxShadow = "0 4px 6px yellow";

} 


// else if (curBtnState === "zeroGravity") {
// gravityDrop(gravityAnimationElements);
// curBtnState = "gravityDrop";
// gravityControlButton.style.boxShadow = "0 4px 6px red";
// }


else{
normalGravity(gravityAnimationElements);
curBtnState = "normal";
gravityControlButton.style.boxShadow = "0 0px 0px yellow";
}

});

}


gravityControlFunction(".gravityControlButton", ".zeroGravity");


// **********************************section 3 starts here****************************

// proficiency level starts here

function proficiencyLevel(proficiencyElementId,value,colorValue){
proficiencyElement=document.getElementById(proficiencyElementId);
targetElement=proficiencyElement.lastElementChild.lastElementChild;
// targetElement.style.backgroundImage ="linear-gradient(90deg, #FA0000 0%, #FAB400 100.07%)";
proficiencyElement.lastElementChild.lastElementChild.style.backgroundColor="#FAB400";
targetElement.style.height="100%";
targetElement.style.width=0+"%";
targetElement.style.animationDuration="2s";

widthAnimationKeyframes=[
  {width: "0%"},
  {width: value+"%"}
];
widthAnimationTiming = {
  duration: (value/100)*2000,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in",
}
targetElement.animate(widthAnimationKeyframes, widthAnimationTiming);
}


// proficiencyLevel(proficiencyElement,value,colorValue)
const section3 = document.getElementById("section3");
let animationExecuted = false;

section3.addEventListener("mouseenter", section3AnimationHandler);

function section3AnimationHandler() {
  if (!animationExecuted) {
    animationExecuted = true;
    section3Animation();
  }
}

function section3Animation() {
  proficiencyLevel("html", 90);
  proficiencyLevel("react", 25);
  proficiencyLevel("wordpress", 40);
  proficiencyLevel("mongodb", 70);
  proficiencyLevel("figma", 80);
  proficiencyLevel("canva", 90);
  proficiencyLevel("coreldraw", 75);
  proficiencyLevel("adobeAE", 20);
  proficiencyLevel("research", 90);
  proficiencyLevel("analysis", 85);
  proficiencyLevel("word", 80);
  proficiencyLevel("powerPoint", 80);
  proficiencyLevel("excel", 60);
  proficiencyLevel("mysql", 90);
}


// *****************************section 4 STARTS HERE************************************
 
// project PREVIEW WINDOW
previewButton=document.querySelector(".loadWebsitePreviewButton");
previewImg=document.querySelector(".websitePreviewImg");
websitePreview=document.querySelector("iframe");

previewButton.addEventListener("click",function(){
  previewImg.style.display="none";
  websitePreview.style.display="block";
  websitePreview.src="https://aquaregiafest.com";

});

var projectTitle = document.querySelectorAll(".projectTitle");

projectTitle.forEach(element => {
  var link = element.innerHTML;
  console.log(link);
  element.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default click behavior
    window.open("https://" + link, "_blank"); // Opens the link in a new tab
  });
});

// **********************************FOOTER STARTS HERE**************************************
// footer ADD LINK AND LOGO
function addLink(logoID,link){
  button=document.getElementById(logoID).parentElement;
  button.addEventListener("click",()=>{
    setTimeout(()=>{
      window.open(link);
    },1000);
  })
}
addLink("linkedinLogo","https://www.linkedin.com/in/madhvendra-naruka-52b52621a/");
  addLink("githubLogo","https://github.com/Madhavendra-007");
addLink("mailLogo","mailto:madhvendrasinghnaruka@gmail.com");
addLink("whatsappLogo","https://wa.me/9829620291");
addLink("callLogo","tel:9829620291");





window.addEventListener('scroll', function() {
  var scrollContainer = document.querySelector('.customScrollContainer');
  var scrollSnapCont = document.querySelector('.scrollSnapCont');
  if ((window.innerHeight + window.pageYOffset) >= document.scrollSnapCont.offsetHeight - 400) {
    scrollContainer.style.transform = 'translateX(-250px)';
    scrollContainer.style.transitionDuration = '.2s';
    console.log("yoompopopopopoopopop")
  } else {
    scrollContainer.style.transform = 'translateX(0px)';
    scrollContainer.style.transitionDuration = '.2s';
  }
});

  
