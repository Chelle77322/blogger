const editFormHandler = async function(event) {
    event.preventDefault();

    
    const titleEL = document.getElementById('post-title');
    const bodyEL = document.getElementById('post-body');
    const postId = document.getElementById('post-id')

    fetch("/api/post/" + postId.value, {
        method: "put", 
        body: JSON.stringify({
            title: titleEL.value,
            body: bodyEL.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);