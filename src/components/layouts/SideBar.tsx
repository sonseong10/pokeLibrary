import NoSelect from "@/assets/no-pokemon-selected-image.png";
import Image from "next/image";

/**
 * PoketmonDetail
 * @returns JSX.Element
 */
function SideBar() {
  return (
    <aside>
      <Image src={NoSelect} alt="" />
    </aside>
  );
}

export default SideBar;
