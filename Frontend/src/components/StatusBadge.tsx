// import { StatusIcon } from "@/constant";
import clsx from "clsx";
import scheduled from '../assets/icons/check.svg';
import pending from '../assets/icons/pending.svg';
import cancelled from '../assets/icons/cancelled.svg';

type Status = "scheduled" | "pending" | "cancelled";

const StatusBadge = ({ status }: { status: Status }) => {

  const StatusIcon = {
    scheduled,
    pending,
    cancelled,
  }

  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "cancelled",
      })}
    >
        <img src={StatusIcon[status]} alt="" width={24} height={24} className="h-fit w-3" />
        <p
        className={clsx('text-12-semibold capitalize',{
            'text-green-500': status === "scheduled",
            'text-blue-500' : status === "pending",
            'text-red-500': status === "cancelled",
        })}
        >{status}</p>
    </div>
  );
};

export default StatusBadge;
