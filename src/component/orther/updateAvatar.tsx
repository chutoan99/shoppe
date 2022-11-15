import { useState, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { apiUploadImages } from '../../services/uploadImg';
import { Loading } from '../index';
function UpdateAvatar() {
  const dispatch = useAppDispatch();
  const { photoURL } = useAppSelector<any>((state) => state.user);
  const [avatar, setAvatar] = useState<any>('blob:http://localhost:3000/0bc8bd1e-f41d-4854-977f-1d6bc476988f');
  const [loading, setLoading] = useState(false);
  const handleUploadImg = async (e: any) => {
    e.stopPropagation();
    const files = document.querySelector<any>('[type=file]').files;
    const formData = new FormData();
    for (let i: number = 0; i < files.length; i++) {
      let file = files[i];
      formData.append('file', file);
      formData.append('upload_preset', 'ivxlltnd');
      await apiUploadImages(formData, setLoading, dispatch);
    }
  };
  return (
    <>
      {loading && <Loading />}
      <section className="flex justify-center">
        <div className="px-[30px] flex flex-col" style={{ borderLeft: '.0625rem solid #efefef' }}>
          <div className="rounded-[50%] bg-[#ccc] mb-[20px]  opacity-0.5 w-[150px] h-[150px] overflow-hidden inline-block">
            {avatar && <img className="w-full f-full" src={photoURL || avatar} alt="user" />}
          </div>
          <button className="bg-white rounded-[2px] text-[14px]" style={{ border: '1px solid rgba(0,0,0,.09)', boxShadow: '0 1px 1px 0 rgb(0 0 0 / 3%)' }} onClick={handleUploadImg}>
            <label className="items-center justify-center flex h-[40px]  capitalize cursor-pointer" htmlFor="file">
              Chọn hình ảnh
            </label>
            <input id="file" hidden type="file" name="files[]" multiple onChange={handleUploadImg} />
          </button>
        </div>
      </section>
      <div></div>
    </>
  );
}
export default memo(UpdateAvatar);
