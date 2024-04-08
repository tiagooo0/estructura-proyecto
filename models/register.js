document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevenimos que se refresque la página
    console.log(e.target.children.user.value);
    const res = await fetch("http://localhost:3000/register", { // Nos comunicamos con el backend
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({  // Cadena de texto en formato JSON 
            user: e.target.children.user.value,
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });
});
