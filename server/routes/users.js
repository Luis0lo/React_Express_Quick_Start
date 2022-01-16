import express from "express";
const router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });

//this is the data being passed to the frontend by useEffect
router.get("/", (req, res, next) => {
  res.json({"users": ["Luis Rodrigues", "Bootcampers"]})
})

export default router;
