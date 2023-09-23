const getSaveItem = () => {
    const storedApplication = localStorage.getItem("job-application");
    if(storedApplication){
        return JSON.parse(storedApplication)
    }
    return [];
}
const updataApplication = (id) => {
    const storedApplication = getSaveItem();
    const exists = storedApplication.find(jobId => jobId === id);
    if(!exists){
        storedApplication.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedApplication))
    }
}
export {getSaveItem,updataApplication}