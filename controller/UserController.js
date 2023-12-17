class UserController {
    constructor() {
      this.name = 'UserController';
      this.users = [];
    }
  
    get(req, res) {
      const userId = parseInt(req.params.user_id);
  
      const user = this.users.find(u => u.id === userId);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }
  
    getByEmail(req, res) {
      const userEmail = req.query.email;
  
      const user = this.users.find(u => u.email === userEmail);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }

    update(req, res) {
    const userId = parseInt(req.params.user_id);

    const { name, age, phone, email, start_date, current_batch } = req.body;

    const userIndex = this.users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
      // Update user details
      this.users[userIndex] = {
        id: userId,
        name,
        age,
        phone,
        email,
        start_date,
        current_batch,
      };

      res.status(200).json(this.users[userIndex]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  }
}

  
  module.exports = UserController;
  