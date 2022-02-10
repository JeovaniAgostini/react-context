import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from "../../App"

function MenuList() {
    const [menuItems, setMenuItems] = useState([])
    const value = useContext(AuthContext)

    useEffect(() => {
        setMenuItems(["Teste", "Outro", "Lista"])
        console.log("value: ", value)
    }, [])

    return (
        <>
            <ul>
                {
                    menuItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default MenuList