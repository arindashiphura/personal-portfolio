
    function validateForm() {
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var project = document.getElementById('project').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Validate Name
        if (name == "") {
            alert("Please enter your name.");
            return false;
        }

        // Validate Email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email == "") {
            alert("Please enter your email.");
            return false;
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            return false;
        }

        // Validate Phone
        var phonePattern = /^[0-9]+$/;
        if (phone == "") {
            alert("Please enter your phone number.");
            return false;
        } else if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return false;
        }

        // Validate Project
        if (project == "") {
            alert("Please enter your project.");
            return false;
        }

        // Validate Subject
        if (subject == "") {
            alert("Please enter the subject.");
            return false;
        }

        // Validate Message
        if (message == "") {
            alert("Please enter your message.");
            return false;
        }

        // If all validations pass
        return true;
    }

