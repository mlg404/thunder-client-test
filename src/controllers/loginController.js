class LoginController {
  async login(req, res) {
    console.log(req.body);
    const token = 2 * (Math.random() * 10).toFixed(0); // super secure authentication 👨‍💻

    return res.json({ token });
  }
}

module.exports = LoginController;
