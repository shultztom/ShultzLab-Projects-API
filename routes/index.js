var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "ShutlzLab Projects API" });
});

/* GET state page. */
router.get("/all", function(req, res, next) {
  let data = [
    {
      id: 1,
      img: "https://api.shultzlab.com/images/golfhandicapcalculator-min.PNG",
      text: "Golf Handicap Calculator",
      link: "https://golfhandicapcalculator.herokuapp.com/",
      github: "",
      techUsed: ["Express", "MongoDB", "Passport", "Heroku"]
    },
    {
      id: 2,
      img: "https://api.shultzlab.com/images/xkcdviewer-min.PNG",
      text: "XKCD Comic Viewer",
      link: "https://shultztom.github.io/xkcd-viewer-react/",
      github: "https://github.com/shultztom/xkcd-viewer-react",
      techUsed: ["React", "Github Pages"]
    },
    {
      id: 3,
      img: "https://api.shultzlab.com/images/xkcdapi-min.PNG",
      text: "XKCD CORS API",
      link: "https://xkcd-cors-api.shultzlab.com/",
      github: "https://github.com/shultztom/xkcd-cors-api",
      techUsed: ["Express", "Self-Hosted", "OpenShift"]
    },
    {
      id: 4,
      img: "https://api.shultzlab.com/images/randomdoggeneratorreact-min.PNG",
      text: "Random Dog Generator",
      link: "https://shultztom.github.io/dog-generator-react/",
      github: "https://github.com/shultztom/dog-generator-react",
      techUsed: ["React", "Github Pages"]
    },

    {
      id: 5,
      img: "https://api.shultzlab.com/images/shultzlabprojects-min.png",
      text: "ShultzLab Projects",
      link: "https://shultzlab.com/",
      github: "https://github.com/shultztom/shultzlab-projects-react",
      techUsed: ["React", "NGINX", "Self-Hosted"]
    },
    {
      id: 6,
      img: "https://api.shultzlab.com/images/dinofactsimg-min.PNG",
      text: "Dinosaur Facts!",
      link: "https://shultztom.github.io/dinosaur-fact-react/",
      github: "https://github.com/shultztom/dinosaur-fact-react",
      techUsed: ["React", "Github Pages"]
    },
    {
      id: 7,
      img: "https://api.shultzlab.com/images/dinofactsapi-min.PNG",
      text: "Dinosaur Facts! API",
      link: "https://dinosaur-facts-api.shultzlab.com/",
      github: "https://github.com/shultztom/dinosaur-fact-api",
      techUsed: ["Express", "Self-Hosted", "OpenShift"]
    }
  ];
  res.json(data);
});

module.exports = router;
