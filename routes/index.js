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
        "https://s3.us-east-2.amazonaws.com/shultzlab-s3-bucket/shultzlab-projects/golfhandicapcalculator.PNG",
      text: "Golf Handicap Calculator",
      link: "https://golfhandicapcalculator.herokuapp.com/",
      github: "",
      techUsed: ["Express", "MongoDB", "Passport", "Heroku"]
    },
    {
      id: 2,
      img:
        "https://s3.us-east-2.amazonaws.com/shultzlab-s3-bucket/shultzlab-projects/xkcdviewer.PNG",
      text: "XKCD Comic Viewer",
      link: "https://shultztom.github.io/xkcd-viewer-react/",
      github: "https://github.com/shultztom/xkcd-viewer-react",
      techUsed: ["React", "Github Pages"]
    },
    {
      id: 3,
      img:
        "https://s3.us-east-2.amazonaws.com/shultzlab-s3-bucket/shultzlab-projects/xkcdapi.PNG",
      text: "XKCD CORS API",
      link: "https://xkcd-cors-api.herokuapp.com/",
      github: "https://github.com/shultztom/xkcd-cors-api",
      techUsed: ["Express", "Heroku"]
    },
    {
      id: 4,
      img:
        "https://s3.us-east-2.amazonaws.com/shultzlab-s3-bucket/shultzlab-projects/randomdoggeneratorreact.PNG",
      text: "Random Dog Generator",
      link: "https://shultztom.github.io/dog-generator-react/",
      github: "https://github.com/shultztom/dog-generator-react",
      techUsed: ["React", "Github Pages"]
    },

    {
      id: 5,
      img:
        "https://s3.us-east-2.amazonaws.com/shultzlab-s3-bucket/shultzlab-projects/shultzlabprojects.PNG",
      text: "ShultzLab Projects",
      link: "https://shultzlab.com/",
      github: "",
      techUsed: ["React", "AWS S3", "NGINX", "Self-Hosted"]
    },
    {
      id: 6,
      img:
        "https://s3.us-east-2.amazonaws.com/shultzlab-s3-bucket/shultzlab-projects/dinofacts.PNG",
      text: "Dinosaur Facts!",
      link: "https://shultztom.github.io/dinosaur-fact-react/",
      github: "https://github.com/shultztom/dinosaur-fact-react",
      techUsed: ["React", "Github Pages"]
    },
    {
      id: 7,
      img:
        "https://s3.us-east-2.amazonaws.com/shultzlab-s3-bucket/shultzlab-projects/dinofactsapi.PNG",
      text: "Dinosaur Facts! API",
      link: "https://github.com/shultztom/dinosaur-fact-api",
      github: "https://dinosaur-facts-api.herokuapp.com/",
      techUsed: ["Express", "Heroku"]
    }
  ];
  res.json(data);
});

module.exports = router;
