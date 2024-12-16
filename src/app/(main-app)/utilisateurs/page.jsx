import React from "react"

const page = async () => {
    // const users = await new Promise((resolve) => {
    //     setTimeout(() => resolve(["Victor", "Sarah", "Anna"]), 2000)
    // })
    const users = await new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Aucun utilisateur trouvé")), 2000)
    })

    return (
        <div className="mt-12">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
                Utilisateurs
            </p>
            <ul className="bg-white shadow-md rounded-lg p-2">
                {users.map((user, index) => (
                    <li
                        key={index}
                        className="text-lg text-gray-700 border-b last:border-none p-2"
                    >
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default page
