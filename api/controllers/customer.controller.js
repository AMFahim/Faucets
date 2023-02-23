const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
    new GoogleStrategy(
        {
            clientID: "297857372538-cme57p6alse3f2rdp9uerinbcbj5u3tu.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"]
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile)
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})

