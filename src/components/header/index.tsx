import style from './style.module.scss'
import Logo from '../logo'
import { Link } from 'react-router'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";
import Nav from '../nav'


function Header() {
    return (
        <>
            <div className={style.header}>
                <Link to={`/`}>
                    <Logo />
                </Link>
                <Nav />
            </div>
            <div className={style.mobile_nav}>
                <Link to={`/`}>
                    <Logo />
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <span className={style.trigger}>
                            <IoMenu />
                        </span>
                    </SheetTrigger>
                    <SheetContent className='bg-[#010626]'>
                        <SheetHeader>
                            <SheetTitle className='mt-4'>
                                <Logo />
                            </SheetTitle>
                            <SheetDescription>
                                Menu
                            </SheetDescription>
                                <Nav />
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default Header