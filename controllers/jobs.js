const getAllJobs = async (request, response) => {
    response.send('get All Jobs')
}
const getJob = async (request, response) => {
    response.send('get A Jobs')
}
const createJob = async (request, response) => {
    response.send('create a job')
}
const updateJob = async (request, response) => {
    response.send('update a job')
}
const deleteJob = async (request, response) => {
    response.send('delete a job')
}



module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob, 
    deleteJob
}