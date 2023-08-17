"use client"
import { getProviders, signIn } from 'next-auth/react'
import { useEffect, useState } from "react";
import Button from './Button';

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {

    return(
      <div className="">AuthProvider</div>
    )
}
export default AuthProviders