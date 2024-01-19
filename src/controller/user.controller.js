import { usermodel } from "../models/user.model.js";

export const usercontroller = {
  // findMany: async (req, res) => {
  //   try {
  //     let { err, data } = await usermodel.findMany();
  //     if (err) throw err;
  //     return res.status(200).json({
  //       message: "Lấy dữ liệu thành công!",
  //       data,
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: "Lấy dữ liệu thất bại!",
  //       error,
  //     });
  //   }
  // },
  // addUser: async (req, res) => {
  //   try {
  //     let body = req.body;
  //     console.log(body);
  //     let { err, data } = await usermodel.addUser(body);
  //     if (err) throw err;
  //     return res.status(200).json({
  //       message: "Thêm dữ liệu thành công!",
  //       data,
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: "Thêm dữ liệu thất bại!",
  //       error,
  //     });
  //   }
  // },
  // deleteUser: async (req, res) => {
  //   let userId = req.params.userId;
  //   try {
  //     let { err, data } = await usermodel.deleteUser(userId);
  //     if (err) throw err;
  //     return res.status(200).json({
  //       message: "Xóa dữ liệu thành công!",
  //       data,
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: "Xóa dữ liệu thất bại!",
  //       error,
  //     });
  //   }
  // },
  // updateUser: async (req, res) => {
  //   let userId = req.params.userId;
  //   try {
  //     let { err, data } = await usermodel.updateUser(
  //       userId,
  //       req.body.username,
  //       req.body.password
  //     );
  //     if (err) throw err;
  //     return res.status(200).json({
  //       message: "Cập nhật dữ liệu thành công!",
  //       data,
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: "Cập nhật dữ liệu thất bại!",
  //       error,
  //     });
  //   }
  // },
};
