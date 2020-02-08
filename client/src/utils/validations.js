const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const passwordRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
);

const nameRegex = RegExp(
    /[a-z]{2,10}/
);

const phoneRegex = RegExp(
    /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
);

export {
    emailRegex,
    passwordRegex,
    nameRegex,
    phoneRegex
}