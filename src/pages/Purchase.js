import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


export default function Page1() {
    const {user} = useAuth0();
    const addUser = async() => {
        try {
            await fetch("/addUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    name: user.name,
                    authID: user.sub
                })
            })
        }
        catch(error) {
            console.log(error);
        }
        
    }
    
    return (
        <body>
        <div className = "fixed w-screen">
          <div className="flex flex-1 relative h-screen pb-52 justify-center items-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                Purchases Coming Soon!
              </h1>
            </div>
          </div>
        </div>
      </body>
      
    )
}