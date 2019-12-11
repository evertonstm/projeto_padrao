import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req)
    return res.json();
  }
}

export default new UserController();
