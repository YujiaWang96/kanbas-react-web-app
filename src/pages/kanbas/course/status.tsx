import { FaBan } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { MdBarChart } from "react-icons/md";
import { CiBullhorn } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
export default function Cs1234Status() {
  return (
    <div id="wd-course-status">
      <h3 style={{ marginTop: "10px", marginBottom: "25px" }}>Course Status</h3>
      <button type="button" className="btn btn-sm btn-secondary me-1 mb-3">
        <FaBan />
        Unpublish
      </button>
      <button type="button" className="btn btn-sm btn-success mb-3">
        <FaRegCircleCheck />
        Publish
      </button>
      <button
        type="button"
        className="btn btn-sm btn-secondary w-100 mb-1 text-start"
      >
        <IoDownloadOutline />
        Import Existing Content
      </button>
      <button
        type="button"
        className="btn btn-sm btn-secondary w-100 mb-1 text-start"
      >
        <HiOutlineDocumentDownload />
        Import from Commons
      </button>
      <button
        type="button"
        className="btn btn-sm btn-secondary w-100 mb-1 text-start"
      >
        <MdBarChart />
        Choose Home page
      </button>
      <button
        type="button"
        className="btn btn-sm btn-secondary w-100 mb-1 text-start"
      >
        <CiBullhorn />
        View Course Screen
      </button>
      <button
        type="button"
        className="btn btn-sm btn-secondary w-100 mb-1 text-start"
      >
        <MdBarChart />
        New Accouncement
      </button>
      <button
        type="button"
        className="btn btn-sm btn-secondary w-100 mb-1 text-start"
      >
        <FiHome />
        New Analytics
      </button>
      <button
        type="button"
        className="btn btn-sm btn-secondary w-100 mb-1 text-start"
      >
        <CiBellOn />
        View Course Notifications
      </button>
    </div>
  );
}
