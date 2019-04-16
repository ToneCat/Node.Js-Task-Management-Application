<head>
<script src="jquery-3.3.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>

$.ajax({
                type: "post",
                url : 'http://0.0.0.0:3000/api/tasks',
                dataType: "json",

                async: true,
                jsonpCallback: "_callback",
                success: function(data) {
                    
                

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('error ' + textStatus + " " + errorThrown);
                }
            });