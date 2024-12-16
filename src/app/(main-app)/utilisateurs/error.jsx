"use client"
import React from "react"

const error = ({ error }) => {
    return (
        <div className="mt-2">
            <p className="text-xl">Une erreur est survenue</p>
            <p className="text-xl text-red-600">Erreur : {error.message}</p>
        </div>
    )
}

export default error
