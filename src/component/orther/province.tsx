import { useState, memo, useEffect } from 'react';
import { GetAllDistrictVietNam, GetAllDistrictWithProvinceCode, GetALLProvinceVietNam, GetAllWardVietNam, GetAllWardWithDistrictCode } from '../../services/province';

function Province() {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [provinceCode, setProvinceCode] = useState();
  const [districtCode, setDistrictCode] = useState();
  useEffect(() => {
    const fetchApiProvinceVietNam = async () => {
      await GetALLProvinceVietNam(setProvince);
    };
    fetchApiProvinceVietNam();
  }, []);
  useEffect(() => {
    const IsShowDistrict = async () => {
      await GetAllDistrictVietNam(setDistrict);
    };
    IsShowDistrict();
  }, []);
  useEffect(() => {
    const isShowWard = async () => {
      await GetAllWardVietNam(setWard);
    };
    isShowWard();
  }, []);

  useEffect(() => {
    const fetchApiWithProvinceCode = async () => {
      await GetAllDistrictWithProvinceCode(provinceCode, setDistrict);
    };
    fetchApiWithProvinceCode();
  }, [provinceCode]);
  useEffect(() => {
    const fetchApiWithDistrictCode = async () => {
      await GetAllWardWithDistrictCode(districtCode, setWard);
    };
    fetchApiWithDistrictCode();
  }, [districtCode]);
  return (
    <div className="flex w-full justify-center items-center gap-[20px] pt-[30px]">
      <span className="w-[130px] text-[1.2rem] text-end">Địa chỉ:</span>
      <div className="flex flex-col gap-[15px] w-full">
        <div className="w-full flex gap-[5px]">
          <select className="w-full h-[2rem] outline-none rounded-[5px]" style={{ border: '1px solid #ccc' }} onChange={(e: any) => setProvinceCode(e.target.value)}>
            <option className="text-center">-- Chọn TP --</option>
            {province?.map((item: any) => (
              <option key={item._id} value={item?.code} className="text-center">
                {item.name}
              </option>
            ))}
          </select>
          <select className="w-full h-[2rem] outline-none  rounded-[5px]" style={{ border: '1px solid #ccc' }} onChange={(e: any) => setDistrictCode(e.target.value)}>
            <option className="text-center">-- Chọn Quận --</option>
            {district?.map((item: any) => (
              <option key={item._id} value={item?.code} className="text-center">
                {item.name}
              </option>
            ))}
          </select>
          <select className="w-full h-[2rem] outline-none   rounded-[5px]" style={{ border: '1px solid #ccc' }}>
            <option className="text-center">-- Chọn Huyện --</option>
            {ward?.map((item: any) => (
              <option key={item._id} value={item?.code} className="text-center">
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <input placeholder="Nhập Địa Chỉ" className="w-full h-[2.5rem] pl-[10px] rounded-[5px] outline-none" type="text" style={{ border: '1px solid #ccc' }} />
      </div>
    </div>
  );
}
export default memo(Province);
