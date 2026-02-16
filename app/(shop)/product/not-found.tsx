import { PageNotFound } from "@/components";


interface Props{
  params:{
    slug: string;
  }
}
export default function not_found(){

  return (
    <PageNotFound/>
  )
}
