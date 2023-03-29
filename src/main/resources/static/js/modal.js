
$(document).ready(function (){
        $('.responsive-table #updateBtn').on('click', function (event){
                event.preventDefault();
            const href = $(this).attr('href');
            $.get(href, function (product, status) {
                    $('#idEdit').val(product.id);
                    $('#codeEdit').val(product.code);
                    $('#nameEdit').val(product.name);
                    $('#priceEdit').val(product.price);
                    $('#price2').val(product.price);
                    $('#sizeEdit').val(product.size);
                    $('#colorEdit').val(product.color);
                    $('#typeEdit').val(product.type);
                });
                $('#editModal').modal('show');
                console.log("works22?")
            }
        )
    }
)

$(document).ready(function (){
        $('.responsive-table #updateBtn2').on('click', function (event){
                event.preventDefault();
                const href = $(this).attr('href');
                $.get(href, function (user, status) {
                    $('#idEdit').val(user.id);
                    $('#firstNameEdit').val(user.firstName);
                    $('#lastNameEdit').val(user.lastName);
                    $('#joinLeftTime').val(user.joinLeftTime);
                    $('#timeSession').val(user.timeSession);
                    $('#emailEdit').val(user.email);
                    $('#codeEdit').val(user.code);
                    $('#codeDate').val(user.date);
                    $('#codeType').val(user.type);
                });
                $('#editModal').modal('show');
                console.log("works edit??")
            }
        )
    }
)


$(document).ready(function (){

        $('.responsive-table #updateBtn3').on('click', function (event){
                event.preventDefault();
                const href = $(this).attr('href');
                $.get(href, function (user, status) {
                    $('#idEdit').val(user.id);
                    $('#nameEdit').val(user.name);
                    $('#codeEdit').val(user.code);
                    $('#locEdit').val(user.loc);
                });
                $('#editModal').modal('show');
                console.log("works33?")
            }
        )
    }
)

$(document).ready(function (){

        $('.responsive-table #deleteBtn').on('click', function (event){
                event.preventDefault();
                var href = $(this).attr('href')
                $('#myModal #delRef').attr('href', href);
                $('#myModal').modal('show');
                console.log("works33?")
            }
        )
    }
)

$(document).ready(function (){
        $('#deleteBtn2').on('click', function (event){
                event.preventDefault();
                var href = $(this).attr('href')
                $('#myModal #delRef').attr('href', href);
                $('#myModal').modal('show');
                console.log("works btn2 ?")
            }
        )
    }
)


$(document).ready(function (){
        $('#uploadBtn').on('click', function (event){
                event.preventDefault();
                $('#uploadModal').modal('show');
                console.log("upload?")
            }
        )
    }
)



$(document).ready(function (){
        $('.responsive-table #deeteBtn').on('click', function (event){
                event.preventDefault();
                var href = $(this).attr('href')
                $('#myModal #delRef').attr('href', href);
                $('#myModal').modal('show');
                console.log("works33?")
            }
        )
    }
)

//
// $(document).ready(function (){
//
//         $('.table .btn').on('click', function (event){
//                 event.preventDefault();
//                 $('#exampleModal').modal();
//                 console.log("works2?")
//             }
//         )
//     }
// )

// var date = document.getElementById("dates").innerText;
// document.getElementById("deleteDate").innerText = date;
// document.getElementById("deleteDate2").innerText = date;


// delete the user from the database
function deleteDate(deleteURL) {
    $.ajax({
        type: "DELETE",
        url: deleteURL,
        success: function () {
            // window.location.reload();
            console.log("data removed" + deleteURL)
        },

        failure: function (errMsg) {
            console.log(errMsg.toString())
        }
    });
}

document.getElementById("deleteDates").innerHTML =
    "<a href='' id='deleteBtn2' data-toggle='modal\'>\n" +
    "              <i class='fa-regular fa-trash-can fa-xl'></i>\n" +
    "            </a>";


// var date = document.getElementById("dates").
var delteUrl= "/" + document.getElementById("dates").innerText + "/delete";
console.log("delete date is: " + delteUrl);

document.getElementById("buttons").innerHTML =
    "<button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n" +
    "          <button onclick=\"this.disabled=true;deleteDate(delteUrl)\" type=\"button\" class=\"btn btn-danger\" id=\"delRef\">Delete</button>"

$(document).ready(function (){
        $('#delRef').on('click', function (event){
                event.preventDefault();
                $('#myModal').modal('hide');
                $('#result').modal('show');
                console.log("works closed ?")
            }
        )
    }
)