const router = require("express").Router();
const mid = require("./accounts-middleware");
const Account = require('./accounts-model')

router.get("/", async (req, res, next) => {
  try {
    const accts = await Account.getAll()
    res.json(accts)
  } catch (err) {
    next(err);
  }
});

router.get("/:id", mid.checkAccountId, async (req, res, next) => {
  try {
    const acct = await Account.getById(req.params.id)
    res.json(acct);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  mid.checkAccountPayload,
  mid.checkAccountNameUnique,
  (req, res, next) => {
    try {
      res.json("post account");
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  mid.checkAccountId,
  mid.checkAccountPayload,
  mid.checkAccountNameUnique,
  (req, res, next) => {
    try {
      res.json("update account by id");
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", mid.checkAccountId, (req, res, next) => {
  try {
    res.json("delete account by id");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {// eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
