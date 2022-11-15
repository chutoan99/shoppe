import axios from 'axios';
import { updateAddress, updateBirthday, updateAvatar, updateGender } from '../redux/userSlice';
export const apiUploadImages = (formData: any, setLoading: any, dispatch: any) =>
  new Promise(async (resolve, reject) => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        url: `https://api.cloudinary.com/v1_1/dxcershra/image/upload/`,
        data: formData,
      });
      dispatch(updateAvatar(response?.data?.secure_url));
      resolve(response);
    } catch (error) {
      reject(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  });
