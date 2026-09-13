export function PageHeading({ children }){
    return(
        <h2 className="text-[24px] leading-8 font-bold font-plus text-navy-dark mb-2 ">
          {children}
        </h2>
    );
}

export function PagePara({ children }){
    return(
        <p className="text-[14px] leading-5 font-inter text-blackish-ash ">
          {children}
        </p>
    );
}

export function SubHeading({ children }){
    return(
        <h3 className="text-[20px] leading-7 font-semibold font-plus text-[navy-dark]" >{children}</h3>
    );
}

