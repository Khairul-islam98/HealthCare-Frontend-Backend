import { Button } from "./ui/button";
import loader from '../assets/icons/loader.svg'

interface ButtonProps {
    isLoading: boolean;
    className?: string;
    children: React.ReactNode;
}
const SubmitButton = ({isLoading, className, children}: ButtonProps) => {
    return (
       <Button type="submit" disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
        {isLoading ? (
            <div className="flex items-center gap-4">
                <img src={loader} alt={loader} width={24} height={24} className="animate-spin" /> Loading ...
            </div>
        ): children }
       </Button>
    );
};

export default SubmitButton;