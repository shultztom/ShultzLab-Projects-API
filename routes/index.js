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
      img:
        "https://shultzlab.com/shultzlabprojectsapi/images/golfhandicapcalculator.PNG",
      text: "Golf Handicap Calculator",
      link: "https://golfhandicapcalculator.herokuapp.com/",
      github: "",
      techUsed: ["Express", "MongoDB", "Passport", "Heroku"]
    },
    {
      id: 2,
      img: "https://shultzlab.com/shultzlabprojectsapi/images/xkcdviewer.PNG",
      text: "XKCD Comic Viewer",
      link: "https://shultztom.github.io/xkcd-viewer-react/",
      github: "https://github.com/shultztom/xkcd-viewer-react",
      techUsed: ["React", "Github Pages"]
    },
    {
      id: 3,
      img: "https://shultzlab.com/shultzlabprojectsapi/images/xkcdapi.PNG",
      text: "XKCD CORS API",
      link: "https://xkcd-cors-api.herokuapp.com/",
      github: "https://github.com/shultztom/xkcd-cors-api",
      techUsed: ["Express", "Heroku"]
    },
    {
      id: 4,
      img:
        "https://shultzlab.com/shultzlabprojectsapi/images/randomdoggeneratorreact.PNG",
      text: "Random Dog Generator",
      link: "https://shultztom.github.io/dog-generator-react/",
      github: "https://github.com/shultztom/dog-generator-react",
      techUsed: ["React", "Github Pages"]
    },

    {
      id: 5,
      img:
        "https://shultzlab.com/shultzlabprojectsapi/images/shultzlabprojects.PNG",
      text: "ShultzLab Projects",
      link: "https://shultzlab.com/",
      github: "https://github.com/shultztom/shultzlab-projects-react",
      techUsed: ["React", "NGINX", "Self-Hosted"]
    },
    {
      id: 6,
      img: "https://shultzlab.com/shultzlabprojectsapi/images/dinofacts.PNG",
      text: "Dinosaur Facts!",
      link: "https://shultztom.github.io/dinosaur-fact-react/",
      github: "https://github.com/shultztom/dinosaur-fact-react",
      techUsed: ["React", "Github Pages"]
    },
    {
      id: 7,
      img: "https://shultzlab.com/shultzlabprojectsapi/images/dinofactsapi.PNG",
      text: "Dinosaur Facts! API",
      link: "https://github.com/shultztom/dinosaur-fact-api",
      github: "https://dinosaur-facts-api.herokuapp.com/",
      techUsed: ["Express", "Heroku"]
    }
  ];
  res.json(data);
});

module.exports = router;
