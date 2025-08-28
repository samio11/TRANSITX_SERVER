"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryUpload = void 0;
const cloudinary_1 = require("cloudinary");
const _1 = __importDefault(require("."));
const AppError_1 = require("../errors/AppError");
cloudinary_1.v2.config({
    cloud_name: _1.default.CLUDINARY_NAME,
    api_key: _1.default.CLOUDINARY_API_KEY,
    api_secret: _1.default.CLOUDINARY_API_SECRET,
});
const deleteImageFromCloudinary = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = /\/v\d+\/(.*?)\.(jpg|jpeg|png|gif|webp)$/i;
    const match = url.match(regex);
    if (match && match[1]) {
        try {
            const public_id = match[1];
            yield cloudinary_1.v2.uploader.destroy(public_id);
            console.log(`Image Delete Done`);
        }
        catch (err) {
            console.log(err);
            throw new AppError_1.AppError(401, `Image Delete Failed ${err}`);
        }
    }
});
exports.cloudinaryUpload = cloudinary_1.v2;
