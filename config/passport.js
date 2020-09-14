const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { jwtSecret } = require('./vars');

const jwtOptions = {
    secretOrKey: jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
const jwt = async (payload, done) => {
    try {
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
};

exports.jwt = new JwtStrategy(jwtOptions, jwt);
