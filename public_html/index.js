var connToken = "Private-Use Yours";
var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";

//  Initialize form
function initForm() {
    resetForm();
}

//  Reset form 
function resetForm() {
    $("#studentForm")[0].reset();

    $("#rollNo").prop("disabled", false);
    $("#fullName, #studentClass, #birthDate, #address, #enrollDate").prop("disabled", true);

    $("#saveBtn, #updateBtn, #resetBtn").prop("disabled", true);

    $("#rollNo").focus();
}

//  Validate data
function validateData() {
    if ($("#rollNo").val() === "") return alert("Roll No required"), false;
    if ($("#fullName").val() === "") return alert("Name required"), false;
    if ($("#studentClass").val() === "") return alert("Class required"), false;
    if ($("#birthDate").val() === "") return alert("Birth Date required"), false;
    if ($("#address").val() === "") return alert("Address required"), false;
    if ($("#enrollDate").val() === "") return alert("Enrollment Date required"), false;
    return true;
}

//  Check Primary Key
$("#rollNo").blur(function () {

    var roll = $("#rollNo").val();
    if (roll === "") return;

    var getReq = createGET_BY_KEYRequest(connToken, dbName, relName, roll);
    jQuery.ajaxSetup({async: false});
    var res = executeCommandAtGivenBaseUrl(getReq, "http://api.login2explore.com:5577", "/api/irl");
    jQuery.ajaxSetup({async: true});

    if (res.status === 400) {
        // Record NOT FOUND → Enable Save
        $("#saveBtn, #resetBtn").prop("disabled", false);
        $("#fullName, #studentClass, #birthDate, #address, #enrollDate").prop("disabled", false);
        $("#fullName").focus();
    } else {
        // Record FOUND  
        var data = JSON.parse(res.data).record;

        $("#fullName").val(data.fullName);
        $("#studentClass").val(data.studentClass);
        $("#birthDate").val(data.birthDate);
        $("#address").val(data.address);
        $("#enrollDate").val(data.enrollDate);

        $("#rollNo").prop("disabled", true);

        $("#updateBtn, #resetBtn").prop("disabled", false);
        $("#fullName, #studentClass, #birthDate, #address, #enrollDate").prop("disabled", false);
        $("#fullName").focus();
    }
});

//  Save Data
function saveData() {
    if (!validateData()) return;

    var jsonObj = {
        rollNo: $("#rollNo").val(),
        fullName: $("#fullName").val(),
        studentClass: $("#studentClass").val(),
        birthDate: $("#birthDate").val(),
        address: $("#address").val(),
        enrollDate: $("#enrollDate").val()
    };

    var putReq = createPUTRequest(connToken, JSON.stringify(jsonObj), dbName, relName);

    jQuery.ajaxSetup({async: false});
    executeCommandAtGivenBaseUrl(putReq, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});

    alert("Data Saved Successfully!");
    resetForm();
}

//  Update Data
function updateData() {
    if (!validateData()) return;

    var jsonObj = {
        rollNo: $("#rollNo").val(),
        fullName: $("#fullName").val(),
        studentClass: $("#studentClass").val(),
        birthDate: $("#birthDate").val(),
        address: $("#address").val(),
        enrollDate: $("#enrollDate").val()
    };

    var updateReq = createUPDATERecordRequest(connToken, JSON.stringify(jsonObj), dbName, relName);

    jQuery.ajaxSetup({async: false});
    executeCommandAtGivenBaseUrl(updateReq, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});

    alert("Data Updated Successfully!");
    resetForm();
}
