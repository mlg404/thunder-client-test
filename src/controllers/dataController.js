class DataController {
  async getData(req, res) {
    console.log(req.body);

    return res.json({
      posts: [
        {
          title: "Olá mundo",
          body: "World is not fair",
        },
      ],
    });
  }
}

module.exports = DataController;
