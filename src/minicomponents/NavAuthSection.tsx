import React from 'react'
import { Typography, Button, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { PiSignInLight } from 'react-icons/pi'
import { AiOutlineUserAdd } from 'react-icons/ai'
// profile menu component
const profileMenuItems = [
    {
        label: 'Sign In',
        icon: PiSignInLight,
        link: '/signin'
    },
    {
        label: 'Create Account',
        icon: AiOutlineUserAdd,
        link: '/signup'
    }
]

export function NavAuthSection() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-1 px-3 lg:ml-auto "
                >
                    <BiUser size={27} className="" />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1 bg-gray-200">
                {profileMenuItems.map(({ label, icon, link }, _key) => {
                    return (
                        <Link
                            to={link!}
                            className="hover:no-underline outline-none hover:outline-none active:outline-none focus:outline-none"
                        >
                            <MenuItem
                                key={label}
                                onClick={closeMenu}
                                className={`flex items-center gap-2 rounded text-black p-1  hover:bg-gray-400`}
                            >
                                {React.createElement(icon, {
                                    className: `h-6 w-6`,
                                    strokeWidth: 2
                                })}
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-semibold text-black font-rubik -tracking-wider"
                                    color={''}
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        </Link>
                    )
                })}
            </MenuList>
        </Menu>
    )
}
