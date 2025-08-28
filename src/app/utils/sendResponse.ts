import { Response } from "express";

interface ISendResponse<T> {
  success: true;
  statusCode: number;
  message: string;
  data: T | T[] | null;
}

export const sendResponse = <T>(res: Response, data: ISendResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
  });
};
