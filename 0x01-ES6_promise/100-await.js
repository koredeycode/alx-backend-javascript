import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let ret = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    ret = {
      photo,
      user,
    };
  } catch (err) {
    console.log(err);
    ret = {
      photo: null,
      user: null,
    };
  }
  return ret;
}
