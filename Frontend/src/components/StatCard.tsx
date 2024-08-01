import clsx from "clsx";

interface StateCardProps {
    type: 'appointment' | 'pending' | 'cancelled';
    count: number;
    label: string;
    icon: string
}


const StatCard = ({count=0, label, icon, type}: StateCardProps) => {
    return (
        <div className={clsx('stat-card', {
            'bg-appointments': type === 'appointment',
            'bg-pending': type === 'pending',
            'bg-cancelled': type === 'cancelled'
        })}>
           <div className="flex items-center gap-4">
            <img src={icon} height={32} width={32} className="size-8 w-fit" alt="label" />
            <h2 className="text-32-bold text-white">{count}</h2>
           </div>
           <div>{label}</div>
        </div>
    );
};

export default StatCard;