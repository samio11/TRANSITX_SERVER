import { v2 as cloudinary } from "cloudinary";
import config from ".";
import { AppError } from "../errors/AppError";

cloudinary.config({
  cloud_name: config.CLUDINARY_NAME as string,
  api_key: config.CLOUDINARY_API_KEY as string,
  api_secret: config.CLOUDINARY_API_SECRET as string,
});

const deleteImageFromCloudinary = async (url: string) => {
  const regex = /\/v\d+\/(.*?)\.(jpg|jpeg|png|gif|webp)$/i;
  const match = url.match(regex);
  if (match && match[1]) {
    try {
      const public_id = match[1];
      await cloudinary.uploader.destroy(public_id);
      console.log(`Image Delete Done`);
    } catch (err) {
      console.log(err);
      throw new AppError(401, `Image Delete Failed ${err}`);
    }
  }
};

export const cloudinaryUpload = cloudinary;
