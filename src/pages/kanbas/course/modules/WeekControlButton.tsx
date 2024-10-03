import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
export default function WeekControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <span>&nbsp;</span>
      <FaPlus />
      <span>&nbsp;</span>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
