export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    auth0Url: process.env.AUTH0_BASE_URL,
  });
}
