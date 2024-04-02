import { RiMenu2Line } from "react-icons/ri";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface Props {
  size: number;
  color: string;
}

export const Menu = ({size, color}:Props) => {
  return (
    <RiMenu2Line size={size} color={color} />
  )
}

export const AngleRight = ({size, color}:Props) => {
  return (
    <FaAngleRight size={size} color={color} />
  )
}

export const AngleLeft = ({size, color}:Props) => {
  return (
    <FaAngleLeft size={size} color={color} />
  )
}