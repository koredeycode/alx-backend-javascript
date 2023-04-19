import uploadPhoto from "./utils.js"
import createUser from "./utils.js"

export default async function asyncUploadUser() {
  let ret = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    ret = {
      photo,
      user
    }
  } catch (err) {
	console.log(err)
    ret = {
      photo: null,
      user: null
    };
  }
  return ret;
}
