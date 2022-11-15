interface categoryGroup {
  title: String;
  content: String[];
}
function CategoryGroup({ title, content }: categoryGroup) {
  return (
    <div className="py-[20px]" style={{ borderBottom: '1px solid #ccc' }}>
      <div className="text-[#333] text-[0.938rem] pb-[10px]">{title}</div>
      <ul className="list-none">
        {content.map((item: any, index: number) => (
          <li className="flex items-center text-[0.875rem] text-[#333] p-[8px]" key={index}>
            <input type="checkbox" className="mr-[12px]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CategoryGroup;
