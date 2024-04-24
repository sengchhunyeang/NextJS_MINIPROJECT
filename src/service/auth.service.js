export const loginService = async (userInput) => {
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
            "Content-Type": "application/json"
        },
    });
    const data = await res.json();
    if (data.token) {
        return data;
    } else {
        return null;
    }


};

