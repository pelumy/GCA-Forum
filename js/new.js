$('#dropdown1').click(function(){
    $('#dropdown-menu1').toggleClass('show');
});

$('#dropdown2').click(function(){
    $('#dropdown-menu2').toggleClass('show');
});
// sidebar toggle
$(document).ready(function(){
    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
    });
});

$(document).ready(function(){
    $('#recentbarCollapse').on('click',function(){
        $('#recent').toggleClass('active');
    });
});