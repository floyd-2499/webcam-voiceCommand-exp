console.log("hey");

const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div"); //creating html in js
  chatContainer.classList.add("chat-container");

  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");

  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);

  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");

  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");

  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);

  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Sorry Boss, I am not programmed for this input! ";

  if (message.includes("hi")) {
    speech.text =
      " Hey Boss, Jeevan Chat-Bot activated. What are we going to do Sir?";
  }
  if (message.includes("get your detail")) {
    speech.text =
      "I'm a Robot, programmed  by Floyd on April 16 2021. Coded from Jane Chat-bot. I was created to assist user with my programmed tasks. As of now I can only respond, what is programmed in me. Soon I will be performing tasks. Thank you  ";
  }

  if (message.includes(`my name is `)) {
    let myArr = message;
    let userName = myArr.split(" ");
    speech.text = `Hey ${userName[3]}`;
  }

  // if (message.includes("take a picture")) {
  //   document.getElementById("camera").style.display = "block";
  //   Webcam.set({
  //     width: 320,
  //     height: 240,
  //     image_format: "jpeg",
  //     jpeg_quality: 90,
  //   });
  //   Webcam.attach(`#camera`);
  // // Webcam.snap ( function(data_uri) {
  // //   document.getElementById('pic').innerHTML = '<img src="'+data_uri+'"/> ';
  // // });
  //   speech.text = " Web cam is on";
  // }
  // Webcam.attach("#camera");
  // document.getElementById("pic").innerHTML =

  //  Webcam.snap = document.getElementById("pic").innerHTML =
  //         '<img src="1"/> ';

  // function takepic(){
  //   // to play shutter sound
  //   // shutter.play();   // didnt workout
  //   // btn and image-display function
  //   console.log('you have clicked button')

  // }

  // new try
  // const button = document.querySelector("#clicker");

  // setInterval(function(){
  //   button.click()
  //   // console.log('you are clicking the btn');
  // }, 200)

  if (message.includes("open cam")) {
 
    document.getElementById("camera").style.display = "block";
    Webcam.set({
      width: 320,
      height: 240,
      image_format: "jpeg",
      jpeg_quality: 90,
    });
    Webcam.attach(`#camera`);
    speech.text = " Web cam is on";
    document.getElementById("clickPic").click();
  }

  if (message.includes("click button")) {

    document.getElementById("clickPic").click();
    speech.text =
      "Done, button clicked";
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  // window.speechSynthesis.speak(speech);

  var element = document.getElementById("container");
  element.appendChild(addBotText(speech.text));
}

// res-ones for experiment

// Webcam.snap(function (data_uri) {
//   document.getElementById("pic").innerHTML =
//     '<img src="' + data_uri + '"/> ';
// });

recorder.onstart = () => {
  console.log("Voice activated");
};

recorder.onresult = (event) => {
  // console.log(event);
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  // voice2text.textContent = transcript;
  var element = document.getElementById("container"); //try let
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener("click", () => {
  recorder.start();
});

// Webcam.set({
//   width: 320,
//   height: 240,
//   image_format:'jpeg',
//   jpeg_quality: 90
// })



function myClick() {
  // document.querySelector(".empty").style.backgroundColor = "red";
  console.log("Hey brother");
   
  Webcam.snap(function (data_uri) {
  document.getElementById("pic").innerHTML =
    '<img src="' + data_uri + '"/> ';
}, 2);
}