var obj = {
    firstName: "Dhiman",
    lastName: "Sutradhar"
};

obj.city = "Pune";
obj["state"] = "Maharastra";


Object.defineProperty(obj, "country", {
    value: "India"
});


Object.defineProperties(obj, {
    email: {
        value: "dhiman.sutradhar@forgeahead.io"
    },
    skype: {
        value: "dhiman711"
    }
});