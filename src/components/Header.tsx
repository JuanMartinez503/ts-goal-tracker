import { type PropsWithChildren, type FC } from "react"

type HeaderPropsWithChildren = PropsWithChildren<{image:{
    src:string;
    alt:string;
} } >

const Header:FC<HeaderPropsWithChildren> =({image,children})=>{
return(
    <header>
        <img src={image.src} alt={image.alt} />
        {children}
    </header>
)
}
export default Header