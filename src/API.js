
export const getReset = () => fetch('https://aircall-job.herokuapp.com/reset');

export const getCalls = () => fetch('https://aircall-job.herokuapp.com/activities');

//doesn't seem more specific than getCalls(), so is not used
export const getSpecifics = id => fetch('https://aircall-job.herokuapp.com/activities/' + id);

export const postArchived = (id, status = true) =>
    fetch('https://aircall-job.herokuapp.com/activities/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            is_archived: status
        })
    });