const Post = async function(name, data) {
    try {
        let resp = await fetch(`https://${GetParentResourceName()}/${name}`, {
            method: "POST",
            mode: "same-origin",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data || {})
        });
        if(!resp.ok){
            return;
        }
        return await resp.json();
    } catch (err) {}
}


const Id = document.getElementById("id");
window.onload = function() {
    Post("GetPlayerId").then(id => {
        Id.textContent = id;
    })
}