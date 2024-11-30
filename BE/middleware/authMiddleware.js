import jwt from 'jsonwebtoken';

class AuthMiddleware {
    verifyToken = async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];
            console.log('tokenAccess', token);

            if (token) {
                jwt.verify(token, 'access_token_screset_token', (err, decoded) => {
                    if (err) return res.status(400).json({ Status: false, Error: 'Wrong token' });
                    req.admin = decoded;
                    console.log('decoded', decoded);
                    next();
                })
            } else {
                return res.status(400).json({ Status: false, Error: 'You are authorized' });
            }

        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default new AuthMiddleware();