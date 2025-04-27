
type LineProps = {
    className?: string;
};

const Line: React.FC<LineProps> = ({
    className,
}) => {
    return(
        <div className={`border-[1px] border-accent rounded-lg ${className}`}/>
    );
}
export default Line;