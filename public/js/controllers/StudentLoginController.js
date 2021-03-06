$(window).on('load', () => {

    const loginForm = $('#login-form');

    loginForm.on('submit', (event) => {
        event.preventDefault();

        //get all form data
        const data = new FormData(event.target);
        //get all data in json object
        const studentData = Object.fromEntries(data.entries());

        //we get a promise after the request
        loginStudent(studentData.user_name, studentData).then(
            () => { //promise kept
                alert("Login successful");
                location.href = "html/StudentHomepage.html";
            },
            (err) => { //promise broken
                console.log(err);
            }
        );
    });

});