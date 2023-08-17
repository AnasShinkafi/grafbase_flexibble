"use client"
import { ProjectInterface, SessionInterface } from "@/common.types"
import Image from "next/image"
import React, { ChangeEvent, useState } from "react"
import FormField from "./FormField"
import CustomMenu from "./CustomMenu"
import { categoryFilters } from "@/constants"
import Button from "./Button"
import { useRouter } from "next/navigation"

type Props = {
    type: string,
    session: SessionInterface,
    project?: ProjectInterface
} 

const ProjectForm = ({type, project, session} : Props) => {
    return (
        <div className=""></div>
    )
}

export default ProjectForm