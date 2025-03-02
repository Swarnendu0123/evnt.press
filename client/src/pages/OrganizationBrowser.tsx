import { OrganizationData } from "@/assets/ts/organization";
import Navigation from "@/components/util/Navigation";
import Footer from "@/components/util/Footer";
import { OrganizationProps } from "@/assets/ts/organization";
import { Link } from "react-router-dom";
const OrganizationBrowser = () => {
  const organizationList : OrganizationProps[] = OrganizationData.map((org)=>org)
    return <div>
      <Navigation/>
      <div className="w-full mt-10 flex flex-col gap-4 justify-center ">
        <h1 className="font-bold text-gray-500 text-lg">All Organizations: {organizationList.length} organizations found</h1>
        {organizationList.map((org)=>(
          <Link to={`/org/${org.org_name}` }>
            <div className="w-full h-40 pl-6 flex gap-4 border-0 shadow-lg border-gray-400 rounded-xl items-center">
          <img src={org.image} alt="logo" className="h-32 w-32 rounded-lg" />
          <div className="desc flex flex-col h-full pt-2  text-left">
            <h2 className="text-2xl font-bold">{org.org_name}</h2>
            <span className="text-gray-600 font-semibold">{org.description}</span>
            <span className=" font-semibold text-black">{org.events_organized} Events organised</span>
          </div>
        </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>;
  };
  
  export default OrganizationBrowser;
  