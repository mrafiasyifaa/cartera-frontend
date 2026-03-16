import { cn } from "@/lib/utils";

const Title = ({children, className}:{
    children: React.ReactNode;
    className?: string; 
})=>{
    return(
        <h2 className ={cn("text-4xl font-extrabold text-black-slug capitalize", className)}>
            {children}
        </h2>   
    );
}

const SubTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;

}) => {
    return (
        <h2 className ={cn("text-2xl font-bold text-cassiterite-brown capitalize", className)}>
            {children}
        </h2>
    );
};

export {Title, SubTitle};