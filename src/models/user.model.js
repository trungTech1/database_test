import { mysqlDB } from "../mysql.js";
export const usermodel = {
  // findMany: async () => {
  //   try {
  //     return await new Promise((ok, fail) => {
  //       let queryStr = "SELECT * FROM user";
  //       mysqlDB.query(queryStr, (err, result) => {
  //         if (err)
  //           ok({
  //             error: "lỗi truy vấn cơ sở dữ liệu",
  //           });
  //         ok({
  //           data: result,
  //         });
  //       });
  //     });
  //   } catch (error) {
  //     return error;
  //   }
  // },
  // addUser: async (body) => {
  //   const { username, password } = body;
  //   try {
  //     return await new Promise((ok, fail) => {
  //       if (!username || !password) {
  //         ok({
  //           error: "thiếu thông tin người dùng",
  //         });
  //       }
  //       let queryStr = "INSERT INTO user (username,password) VALUES (?,?)";
  //       mysqlDB.query(queryStr, [username, password], (err, result) => {
  //         console.log(err);
  //         if (err) {
  //           ok({
  //             error: "lỗi truy vấn cơ sở dữ liệu",
  //           });
  //         }
  //         console.log(result);
  //         ok({
  //           data: result,
  //         });
  //       });
  //     });
  //   } catch (err) {
  //     return err;
  //   }
  // },
  // deleteUser: async (userId) => {
  //   try {
  //     return await new Promise((ok, fail) => {
  //       let queryStr = `DELETE FROM user WHERE id = ${userId}`;
  //       mysqlDB.query(queryStr, (err, result) => {
  //         if (err) {
  //           ok({
  //             error: "lỗi truy vấn cơ sở dữ liệu",
  //           });
  //         }
  //         ok({
  //           data: result,
  //         });
  //       });
  //     });
  //   } catch (err) {
  //     return err;
  //   }
  // },
  // updateUser: async (userId, username, password) => {
  //   try {
  //     return await new Promise((ok, fail) => {
  //       let queryStr = `UPDATE user SET username= ?, password = ? WHERE id = ${userId}`;
  //       mysqlDB.query(queryStr, [username, password], (err, result) => {
  //         if (err) {
  //           fail(err);
  //         }
  //         ok({
  //           data: result,
  //         });
  //       });
  //     });
  //   } catch (err) {
  //     return err;
  //   }
  // },
};
