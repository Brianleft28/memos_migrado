import config from "../../config.js";
/*  */
/**
 * @name postLogin
 * @param {Object} params
 * @param {number} params.legajo
 * @param {string} params.password
 * @returns {Promise<any>}
 */
/*  */
export default async function postLogin(params) {
  try {
    console.log("AUTH URL: ", config.app.api.auth);
    const login = await fetch(`${config.app.api.auth}/login`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await login.json();
    return result;
  } catch (error) {
    return error;
  }
}
