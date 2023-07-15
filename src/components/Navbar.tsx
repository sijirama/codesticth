import { Container } from '../layout/container'
import { NavAuthSection } from '../minicomponents/NavAuthSection'
import { ProfileMenu } from '../minicomponents/ProfileDropDown'
import useUserAuth from '../context/AuthContext'
import { capitalizeFirstLetter } from '../utils/functions'

/*
function capitalizeFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
*/

export default function Navbar() {
    const { user } = useUserAuth()

    return (
        <Container>
            <nav className=" bg-transparent w-full h-16 border-red-600 p-2 flex justify-between items-center">
                <div>
                    <p className="-tracking-widest font-Abril text-black text-4xl font-semibold">Duvera</p>
                </div>
                <div className="flex items-center justify-around gap-2">
                    {user ? (
                        <>
                            <ProfileMenu />
                        </>
                    ) : (
                        <NavAuthSection />
                    )}
                </div>
            </nav>
        </Container>
    )
}
