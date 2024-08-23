$(document).ready(function () {
    GetReglist();
   // alert("Success");

});



var SaveReg = function ()
{
    debugger;
    var ID = $("#hdnID").val();
    var name = $("#txtn").val();
    var address = $("#txtadd").val();
    var mobileno = $("#txtmno").val();
    var email = $("#txte").val();
    var image = $("#txti").val();
    var model = {
        ID: ID,
        Name: name,
        Address: address,
        MobileNo: mobileno,
        Email: email,
        Image: image,
    };
    $.ajax({
        url: "/Esankalp_Test/SaveReg",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert(response.Message);
            location.reload();
        }
    });
}
var GetReglist = function ()
{
    debugger;
    $.ajax({
        url: "/Esankalp_Test/GetReglist",
        method: "post",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            var html = "";
            $("#tblReg tbody").empty();
            $.each(response.model, function (Index, elementvalue) {
                html += "<tr><td>" + elementvalue.ID +
                    "</td><td>" + elementvalue.Name +
                    "</td><td>" + elementvalue.Address +
                    "</td><td>" + elementvalue.MobileNo +
                    "</td><td>" + elementvalue.Email +
                    "</td><td>" + elementvalue.Image +
                    "</td><td><input type = 'button' value = 'delete' class = 'btn btn-danger' onclick= 'deleteReg(" + elementvalue.ID + ")'/></td><td><input type = 'button' value = 'edit' class = 'btn btn-warning' onclick= 'GetRegDetailByID(" + elementvalue.ID + ")'/></td><td><input type = 'button' value = 'detail' class = 'btn btn-info' onclick= 'GetRegDetail(" + elementvalue.ID + ")'/></td></tr>";
            })
            $("#tblReg tbody").append(html);
        }

    });
}

var deleteReg = function (ID)
{
    var model = { ID:ID }
    $.ajax({
        url: "/Esankalp_Test/deleteReg",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            alert(response.Message)
            location.reload();
        }
    });
}

var GetRegDetailByID = function (ID)
{
    var model = { ID: ID };
    debugger;
    $.ajax({
        url: "/Esankalp_Test/GetRegDetailByID",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#hdnID").val(response.Message.ID);
            $("#txtn").val(response.Message.Name);
            $("#txtadd").val(response.Message.Address);
            $("#txtmno").val(response.Message.MobileNo);
            $("#txte").val(response.Message.Email);
            $("#txti").val(response.Message.Image);
        }
    });

}

//var GetRegDetail = function (ID)
//{
//    var model = { ID: ID };
//    debugger;
//    $.ajax({
//        url: "/Esankalp_Test/GetRegDetailByID",
//        method: "post",
//        data: JSON.stringify(model),
//        contentType: "application/json;charset=utf-8",
//        dataType: "json",
//        success: function (response) {
//            $("#lblID").text(response.model.ID);
//            $("#lbln").text(response.model.Name);
//            $("#lbladd").text(response.model.Address);
//            $("#lblmno").text(response.model.MobileNo);
//            $("#lble").text(response.model.Email);
//            $("#lbli").text(response.model.Image);

//        }
//    });
//}

var GetRegDetailPopup = function (ID)
{
    debugger;
    var model = { ID: ID };
    $.ajax({
        url: "/Esankalp_Test/GetRegDetailByID",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            $("#Esankalp_TestModel").modal('show');
            $("#Fdetail").empty();
            var html = "";
            html += "<div class='row'>";
            html += "<div class='col-sm-6'>";
            html += "<b>ID:</b>&nbsp&nbsp&nbsp<span>" + response.Message.ID + "</span>";
            html += "</br>";
            html += "<b>Name:</b>&nbsp&nbsp&nbsp<span>" + response.Message.Name + "</span>";
            html += "</br>";
            html += "<b>Address:</b>&nbsp&nbsp&nbsp<span>" + response.Message.Address + "</span>";
            html += "</br>";
            html += "<b>MobileNo:</b>&nbsp&nbsp&nbsp<span>" + response.Message.MobileNo + "</span>";
            html += "</br>";
            html += "<b>Email:</b>&nbsp&nbsp&nbsp<span>" + response.Message.Email + "</span>";
            html += "</br>";
            html += "<b>Image:</b>&nbsp&nbsp&nbsp<span>" + response.Message.Image + "</span>";
            html += "</br>";
            html += "</div>";
            html += "</div>";

            $("#Fdetail").append(html);
        }
    });

}