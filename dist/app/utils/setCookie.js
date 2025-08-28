"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = void 0;
const setToken = (res, token) => {
    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            sameSite: true,
            secure: true,
        });
    }
    if (token.refreshToken) {
        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            sameSite: true,
            secure: true,
        });
    }
};
exports.setToken = setToken;
