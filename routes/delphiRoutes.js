const router = require("express").Router();
const axios = require("axios");

router.post("/createConversation", async (req, res) => {
  try {
    const response = await axios.post(
      `https://api.withdelphi.com/api/conversation/new`,
      req.body,
      {
        headers: {
          "x-api-key": "dsk-V5R0mJ_5tFNwkk5Y53zDAdyyIf6fmCgmHeA0rlKKf2U",
          "Content-Type": "application/json",
        },
      }
    );
    res.status(201).json({
      status: "success",
      data: {
        conversation: response.data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.get("/getConversation/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.withdelphi.com/api/conversation/history?id=${req.params.id}`,
      {
        headers: {
          "x-api-key": "dsk-V5R0mJ_5tFNwkk5Y53zDAdyyIf6fmCgmHeA0rlKKf2U",
        },
      }
    );

    res.status(200).json({
      status: "success",
      data: response.data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});


router.post("/createMessages", async (req, res) => {
    try {
      const response = await axios.post(
        `https://api.withdelphi.com/api/clone/generate_response`,
        req.body,
        {
          headers: {
            "x-api-key": "dsk-V5R0mJ_5tFNwkk5Y53zDAdyyIf6fmCgmHeA0rlKKf2U",
            "Content-Type": "application/json",
          },
        }
      );
      res.status(201).json({
        status: "success",
        data: {
          message: response.data,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  });

module.exports = router;
