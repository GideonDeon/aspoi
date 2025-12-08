import { useParams } from "react-router-dom";
import { dsiOfficers } from "../data/dsiOfficers";
import PageNav from "../components/PageNav";
import Foot from "../components/Copyright";

function DSIpersonaldetail() {
  return (
    <div>
      <PageNav />
      <Details />
      <Foot />
    </div>
  );
}

function Details() {
  const { id } = useParams();

  const officer = dsiOfficers.find((o) => o.id.toString() === id);

  if (!officer) return <h1 className="text-center mt-20">Officer Not Found</h1>;

  return (
    <main className="relative border-2 m-3 p-2 rounded-2xl shadow w-fit sm:w-88 sm:left-[50%] sm:-translate-x-[50%]">
      <img
        src={officer.image}
        alt={officer.name}
        className="w-full h-60 object-contain rounded"
      />
      <p className="text-center font-roboto mt-2 w-fit">
        Dr. <span className="font-bold">{officer.name}</span> DSI is an honorary
        doctor of Security intelligence DSi, worthy of the honor by professional
        security experiences, exposures, commitments and services over the years
        A reputable and responsible security expert with vast knowledge on
        various aspects of security and protections of lives and properties.
        Please accord this important dignitary with deserved recognition as may
        be deemed fit at anytime
      </p>
    </main>
  );
}
export default DSIpersonaldetail;
