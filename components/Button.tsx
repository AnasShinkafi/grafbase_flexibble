import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: 'button' | 'submit';
  bgColor?: string;
  textColor?: string; 
}

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, bgColor , textColor}: Props ) => {
  return (
    <div className=""></div>
  )
} 

export default Button