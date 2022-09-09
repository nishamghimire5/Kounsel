import React from 'react';
import Image from 'next/image'
import {useEffect, useState} from 'react'

function BGImage(){
    return(
        <>
        <Image
            src={"https://images.unsplash.com/photo-1475137979732-b349acb6b7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
            width = {1000}
            height = {1000}
        />
        </>
    )
}

export default BGImage