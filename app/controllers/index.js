const Controller = {
  index: (req, res) => {
    console.log(req.body)
    res.send({ status: 'ok' });
  }
};

module.exports = Controller;
