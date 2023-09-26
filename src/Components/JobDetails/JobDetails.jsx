import { useLoaderData, useParams } from "react-router-dom";
import { updataApplication } from "../../utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const handleApply = () => {
        updataApplication(idInt);
        toast("You have applied successfully");
    }
    return (
        <div className="grid md:grid-cols-4 gap-4">
            <Helmet>
                <title>Job details {id}</title>
            </Helmet>
            <div className="border md:col-span-3">
                <h2 className="text-4xl">Details Coming here</h2>
                <h2>Job details of: {job.job_title}</h2>
                <p>{job.company_name}</p>
            </div>
            <div className="border">
                <h2 className="text-2xl">Side Things</h2>
                <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;