import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => (result.map((p) => ({
      status: p.status,
      value: p.status === 'fulfilled' ? p.value : p.reason.toString(),
    }))));
}
