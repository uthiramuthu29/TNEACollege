export function PageHeading({ children }) {
    return (
        <h2 className="text-[24px] leading-8 font-bold font-plus text-navy-dark mb-2 ">
            {children}
        </h2>
    );
}

export function PagePara({ children }) {
    return (
        <p className="text-[14px] leading-5 font-inter text-blackish-ash ">
            {children}
        </p>
    );
}

export function SubHeading({ children, className = "" }) {
    return (
        <h3 className={`text-[20px] leading-7 font-semibold font-plus text-[navy-dark] ${className}`} >{children}</h3>
    );
}


export function GreenPill({ children, className="" }) {
    return (
        <p className={`text-[10px] leading-5 font-inter font-bold text-dark-green bg-light-green rounded-lg px-2 py-1 ml-auto ${className}`} >{children}</p>
    );
}
