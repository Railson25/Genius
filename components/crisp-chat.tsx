"use client"

import {Crisp} from 'crisp-sdk-web'
import { useEffect } from 'react'

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b0067ece-8c23-40e5-8f75-05be55b143fd")
    }, [])

    return null
}