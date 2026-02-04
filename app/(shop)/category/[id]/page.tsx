
import { notFound } from "next/navigation";



export default async function Category({params}:{params : Promise<{ id : string }>}) {
  const { id } = await params;
  if( id === 'kids'){
    notFound();
  }

  return (
    
      <div className="">
        <h1> Category: {id}</h1>
      </div>
    
  );
}
