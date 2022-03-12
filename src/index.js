import memeMaker from "@erickwendel/meme-maker";

const options = {
  image: "./image/sorry.jpeg", // Required
  outfile: "./image/spiderman-meme.png", // Required
  topText: "DESCULPA TIO BEN", // Required
  bottomText: "LIVE RELOAD N FUNCIONOU", // Optional
  font: "./../impact.ttf", // Optional
  fontSize: 15, // Optional
  fontFill: "#FFF", // Optional
  textPos: "center", // Optional
  strokeColor: "#FFF", // Optional
  strokeWeight: 1, // Optional
};

memeMaker(options)
  .then((_) => {
    console.log("Image saved: " + options.outfile);
  })
  .catch((error) => console.log(error));
