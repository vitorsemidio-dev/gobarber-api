import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new NotificationController();
