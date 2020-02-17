$(document).ready(function () {

    //------------------------Validate-Modal----------------------------
    $("#formModal").validate({
        rules: {
            name: "required",
            phone: {
                required: true,
                digits: true,
                minlength: 5
            },
            address: "required",
        },
        messages: {
            name: "Tên không được bỏ trống",
            phone: {
                required: "SĐT không được bỏ trống",
                digits: "SĐT nhập bằng số, không phải chữ",
                minlength: "SĐT bao gồm 10 kí tự."
            },
            address: "Vui lòng chọn địa chỉ!",
        },
    });

    //------------------------Validate-contact----------------------------
    $("#formContact").validate({
        rules: {
            fullname: "required",
            phone: {
                required: true,
                digits: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            address: "required",
            service: "required",
        },
        messages: {
            fullname: "Tên không được bỏ trống",
            phone: {
                required: "SĐT không được bỏ trống",
                digits: "SĐT nhập bằng số, không phải chữ",
                minlength: "SĐT bao gồm 10 kí tự."
            },
            email: {
                required: "Vui lòng không để trống email!",
                email: "Email có định dạng you@example.com"
            },
            address: "Vui lòng chọn địa chỉ!",
            service: "Vui lòng chọn gói tập!",
        },
    });

});


