import { Response } from "express";

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export const setToken = (res: Response, token: IToken) => {
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
