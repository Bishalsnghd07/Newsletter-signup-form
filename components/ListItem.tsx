import Image from "next/image"
import iconList from "../public/assets/images/icon-list.svg"

export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2.5 pl-4 lg:pl-0 flex items-start gap-4">
      <Image src={iconList} alt="icon list"/>
      <p className="leading-5 lg:leading-6">{children}</p>
    </div>
  )
}